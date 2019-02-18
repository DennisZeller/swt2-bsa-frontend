import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {TranslatePipe} from '@ngx-translate/core';
import {CommonComponent} from '../../../shared/components/common';
import {TruncationPipe} from '../../../shared/pipes';
import {TableConfig} from '../../../shared/components/tables/types/table-config.interface';
import {BaseTableSorter} from '../../../shared/components/tables/control/base-table-sorter.class';
import {VersionedDataObject} from '../../../shared/data-provider/models/versioned-data-object.interface';
import {TableColumnType} from '../../../shared/components/tables/types/table-column-type.enum';
import {DefaultTableSorter} from '../../../shared/components/tables/control/default-table-sorter.class';
import {TableColumnConfig} from '../../../shared/components/tables/types/table-column-config.interface';
import {TableRow} from '../../../shared/components/tables/types/table-row.class';
import {TableActionType} from '../../../shared/components/tables/types/table-action-type.enum';
import {tableConfigWithDefaults} from '../../../shared/components/tables/control/table-config-mapper';

@Component({
  selector:    'bla-vereine-data-table',
  templateUrl: './vereine-data-table.component.html',
  styleUrls:   ['./vereine-data-table.component.scss'],
  providers:   [TranslatePipe, TruncationPipe]
})
export class VereineDataTableComponent extends CommonComponent implements OnInit, OnChanges {
  @Input() public config: TableConfig;
  @Input() public rows: TableRow[] = [];
  @Input() tableSorter: BaseTableSorter;


  @Output() public onEditEntry = new EventEmitter<VersionedDataObject>();
  @Output() public onViewEntry = new EventEmitter<VersionedDataObject>();
  @Output() public onDeleteEntry = new EventEmitter<VersionedDataObject>();
  @Output() public onRowClicked = new EventEmitter<VersionedDataObject>();


  // do not remove, the view uses this enum
  public TableColumnType = TableColumnType;

  initialized = false;

  constructor(private truncationPipe: TruncationPipe,
    private translatePipe: TranslatePipe) {
    super();
  }

  ngOnInit() {
    const clone = this.config;
    this.config = tableConfigWithDefaults(clone);

    // if no sorter implementation is passed, use the default sorter
    if (!this.tableSorter) {
      this.tableSorter = new DefaultTableSorter(this.config);
    }

    this.tableSorter.refreshCurrentSorting(this.rows);
    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      this.tableSorter.refreshCurrentSorting(this.rows);
    }
  }

  public onRow(versionedDataObject: VersionedDataObject): void {
    this.onRowClicked.emit(versionedDataObject);
  }

  /*
   * ~~~~ sorting methods ~~~~
   */

  public getSortingIcon(column: TableColumnConfig): string {
    const sortingClasses = this.tableSorter.getSortingClasses(column);
    // map css classes to icons ...
    let icon = '';
    if (sortingClasses.indexOf('sortable') > -1) {

      if (sortingClasses.indexOf('unsorted') > -1) {
        icon = 'sort';
      } else if (sortingClasses.indexOf('ascending') > -1) {
        icon = 'sort-up';
      } else if (sortingClasses.indexOf('descending') > -1) {
        icon = 'sort-down';
      }
    }
    return icon;
  }

  public sortColumn(sortColumn: TableColumnConfig): void {
    this.rows = this.tableSorter.sortByColumn(this.rows, sortColumn);
  }

  /*
   * ~~~~ getter methods ~~~~
   */

  public getColumnWidth(columnWidth = 0) {
    if (columnWidth && columnWidth > 0) {
      return columnWidth + '%';
    } else {
      return '0';
    }
  }


  public formatText(row: TableRow, column: TableColumnConfig): string {
    const text = row.getText(column);
    if (column.truncationLength > 0) {
      return this.truncationPipe.transform(text, column.truncationLength);
    } else {
      return text;
    }
  }

  public formatNumber(row: TableRow, column: TableColumnConfig): string {
    const text = row.getText(column);
    if (column.truncationLength > 0) {
      return this.truncationPipe.transform(text, column.truncationLength);
    } else {
      return text;
    }
  }

  /**
   * Map the column value with the mappingFunction and try to translate the mapped value
   */
  public getMappedText(row: TableRow, column: TableColumnConfig): string {
    if (!isNullOrUndefined(column.mappingFunction)) {
      return this.translatePipe.transform(
        this.prependLocalizationKey(column.localizationSet, column.mappingFunction(row.getText(column))));
    }
  }


  public getLocalizedText(row: TableRow, column: TableColumnConfig): string {
    return this.translatePipe.transform(this.prependLocalizationKey(column.localizationSet, row.getText(column)));
  }


  public resolveNestedObjectProperties(theObject, path) {
    try {
      const separator = '.';

      return path.replace('[', separator).replace(']', '').split(separator).reduce(
        function (obj, property) {
          return obj[property];
        }, theObject
      );

    } catch (err) {
      return undefined;
    }
  }

  public prependLocalizationKey(localizationSet: string, localizationKey: string): string {
    if (localizationSet) {
      return `${localizationSet}.${localizationKey}`;
    } else {
      return localizationKey;
    }
  }

  /**
   *
   * @param row current row with the action config
   * @param action current action
   * @returns {boolean} true, if the hidden actions config of the row
   *           does not contain the current action
   */
  public isActionVisible(row: TableRow, action: TableActionType): boolean {
    return !(row.hiddenActions.indexOf(action) > -1);
  }


  public hasLoadingActions(row: TableRow): boolean {
    return row.loadingActions.length > 0;
  }

  /**
   *
   * @param row current row with the action config
   * @param action current action
   * @returns {string} path to the icon
   */
  public determineIcon(row: TableRow, action: TableActionType): string {
    let iconSelector = TableActionType[action].toLowerCase();
    let iconStateSelector = 'active';


    if (row.loadingActions.indexOf(action) > -1) {
      // override normal icon with loading indicator icon
      iconSelector = 'loading';
    } else {
      // disable icon
      if (row.disabledActions.indexOf(action) > -1) {
        iconStateSelector = 'inactive';
      }

      // override row specific config, if the table is disabled
      if (this.disabled) {
        iconStateSelector = 'inactive';
      }
    }

    return this.resolveNestedObjectProperties(this.config.actions.icons,
      `${iconSelector}.${iconStateSelector}`);
  }

  /**
   *
   * @param row current row with the action config
   * @param action current action
   * @returns {string} icon image title
   */
  public determineTitle(row: TableRow, action: TableActionType): string {
    if (row.disabledActions.indexOf(action) > -1 || row.loadingActions.indexOf(action) > -1) {
      return '';
    }

    const iconSelector = TableActionType[action].toLowerCase();
    return this.config.actions.localizationKeys[iconSelector];

  }

  /**
   * Triggers the corresponding event emitter with the payload of the row
   *
   * @param row with click event on an action
   * @param action clicked action type
   */
  public onIconClicked(row: TableRow, action: TableActionType): void {
    if (this.isActionEventAllowed(row, action)) {
      switch (action) {
        case TableActionType.EDIT:
          this.onEdit(row.payload);
          break;
        case TableActionType.DELETE:
          this.onDelete(row.payload);
          break;
        case TableActionType.VIEW:
          this.onView(row.payload);
          break;
        default:
          console.warn('Could not handle click on action icon. Unknown action type: ', action);
      }
    }
  }

  /**
   *
   * @returns {boolean} true, if the parent component set the loading state
   */
  public isLoading(): boolean {
    return this.loading;
  }

  /**
   *
   * @returns {boolean} true, if the content array is empty or undefined
   */
  public isEmptyTable(): boolean {
    return !!this.rows ? this.rows.length === 0 : true;
  }

  /**
   *
   * @returns {boolean} true, if the configuration contains any action array element
   */
  public hasActions(): boolean {
    return !!this.config.actions.actionTypes ? this.config.actions.actionTypes.length > 0 : false;

  }

  /**
   *
   * @returns {number} number of table header columns
   */
  public getNumberOfColumns(): number {
    return !!this.config.columns ? this.config.columns.length + 1 : 0;
  }

  public getCellId(row: TableRow, column: TableColumnConfig) {
    if (isNullOrUndefined(column.propertyName) || column.propertyName.length === 0) {
      return `${column.translationKey.replace('.', '')}-${row.payload.id}`;
    } else {
      return `${column.propertyName.replace('.', '')}-${row.payload.id}`;
    }
  }

  public getRowId(row: TableRow) {
    return `payload-id-${row.payload.id}`;
  }

  getStyleClass(row: TableRow, column: TableColumnConfig) {
    if (!isNullOrUndefined(column.stylesMapper)) {
      return column.stylesMapper(row.getText(column));
    }
  }

  /*
   * ~~~~ private methods ~~~~
   */

  private isActionEventAllowed(row: TableRow, action: TableActionType) {
    return row.disabledActions.indexOf(action) === -1
      && !this.disabled
      && row.loadingActions.indexOf(action) === -1;
  }

  private onEdit(affectedRowPayload: VersionedDataObject) {
    this.onEditEntry.emit(affectedRowPayload);
  }

  private onView(affectedRowPayload: VersionedDataObject) {
    this.onViewEntry.emit(affectedRowPayload);
  }

  private onDelete(affectedRowPayload: VersionedDataObject) {
    this.onDeleteEntry.emit(affectedRowPayload);
  }
}
