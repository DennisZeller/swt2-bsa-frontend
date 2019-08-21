import {Component, OnInit} from '@angular/core';
import {HOME_CONFIG} from './home.config';
import {BogenligaResponse} from '@shared/data-provider';
import {WettkampfDTO} from '@verwaltung/types/datatransfer/wettkampf-dto.class';
import {CommonComponent, toTableRows} from '@shared/components';
import {WETTKAMPF_TABLE_CONFIG} from '@home/components/home/wettkampf/wettkampf.config';
import {TableRow} from '@shared/components/tables/types/table-row.class';
import {WettkampfDO} from '@verwaltung/types/wettkampf-do.class';
import {WettkampfDataProviderService} from '@verwaltung/services/wettkampf-data-provider.service';
import {VeranstaltungDataProviderService} from '../../../verwaltung/services/veranstaltung-data-provider.service';
import {VeranstaltungDTO} from '@verwaltung/types/datatransfer/veranstaltung-dto.class';
import {formatDate} from '@angular/common';
import {registerLocaleData} from '@angular/common';
import localeDE from '@angular/common/locales/de';

@Component({
  selector:    'bla-home',
  templateUrl: './home.component.html',
  styleUrls:   ['./home.component.scss']
})
export class HomeComponent extends CommonComponent implements OnInit {

  public config = HOME_CONFIG;
  public config_table = WETTKAMPF_TABLE_CONFIG;
  public wettkaempfeDTO: WettkampfDTO[];
  public wettkaempfeDO: WettkampfDO[];
  public loadingWettkampf = true;
  public loadingTable = false;
  public rows: TableRow[];
  public currentDate: number =  Date.now();
  public dateHelper: string;

  constructor(private wettkampfDataProvider: WettkampfDataProviderService, private veranstaltungDataProvider: VeranstaltungDataProviderService) {
    super();
  }

  ngOnInit() {
    this.loadWettkaempfe();
  }

  /**
   * backend call to get list
   */
  private loadWettkaempfe(): void {
      this.wettkaempfeDTO = [];
      this.wettkaempfeDO = [];
      this.wettkampfDataProvider.findAll()
        .then((response: BogenligaResponse<WettkampfDTO[]>) => { this.handleSuccessLoadWettkaempfe(response.payload); })
        .catch((response: BogenligaResponse<WettkampfDTO[]>) => {this.wettkaempfeDTO = response.payload; });
  }

  private handleSuccessLoadWettkaempfe(payload: WettkampfDTO[]): void {
    this.wettkaempfeDTO = payload;
    this.wettkaempfeDTO.forEach((wettkampf) => {this.wettkaempfeDO.push( new WettkampfDO(
      wettkampf.id,
      wettkampf.wettkampfVeranstaltungsId,
      wettkampf.wettkampfDatum,
      wettkampf.wettkampfOrt,
      wettkampf.wettkampfBeginn,
      wettkampf.wettkampfTag,
      wettkampf.wettkampfDisziplinId,
      wettkampf.wettkampfTypId,
      wettkampf.version)
    )  });

    this.wettkaempfeDO.forEach((wettkampf) => {this.findLigaNameByVeranstaltungsId(wettkampf); });
    this.checkDate();
    this.fillTableRows();
    this.loadingWettkampf = false;
  }

  private findLigaNameByVeranstaltungsId(wettkampf: WettkampfDO): void {
    this.veranstaltungDataProvider.findById(wettkampf.wettkampfVeranstaltungsId)
        .then((response: BogenligaResponse<VeranstaltungDTO>) => {
          wettkampf.wettkampfLiga = response.payload.name;
        })
        .catch((response: BogenligaResponse<VeranstaltungDTO>) => {
          console.log('LigaName not found');
        });

  }

  /**
   * Restriction that only a maximum of six events are portrayed
   * BSAPP- 367
   */
  private fillTableRows(): void {
    this.rows = [];

    if (this.wettkaempfeDO.length < 6) {
      this.rows = toTableRows(this.wettkaempfeDO);
    } else {
      this.rows = toTableRows(this.wettkaempfeDO.slice(0, 5));
    }
  }

  /**
   * Checks that only dates that are in the future will be portrayed
   * BSAPP-366
   */
  private checkDate() {
    /**
     * Gives the german date - otherwise always the american
     */

    registerLocaleData(localeDE);
    this.dateHelper = formatDate(this.currentDate, 'yyyy-MM-dd', 'de');

    for (let i = 0; i < this.wettkaempfeDO.length; i++) {
      /**
       * Turns the strings into date objects which can be easily compared
       */
      const wettkampfDate = new Date(this.wettkaempfeDO[i].wettkampfDatum);
      const heuteDate = new Date(this.currentDate);

      if (wettkampfDate < heuteDate) {
        /**
         * Splice takes out the number of values/objects defined in 'deleteCount'
         * it then moves the rest objects up - that's why we need the i--
         */
        this.wettkaempfeDO.splice(i, 1);
        i--;
      }
    }
  }
}

