import {Component, ElementRef, OnInit, ViewChild, Input} from '@angular/core';
import {environment} from '../../../../../../environments/environment';
import {UriBuilder} from '../../../data-provider';

@Component({
  selector: 'bla-meldezettel-download',
  templateUrl: './meldezettel-download.component.html'
})
export class MeldezettelDownloadComponent implements OnInit {

  // Get the value of the attribute from the html tag
  @Input()
  wettkampfid: number;

  @ViewChild('downloadLink')
  private aElementRef: ElementRef;

  constructor() {}

  ngOnInit() {}

  public getDownloadUrl(path: string): string {
    return new UriBuilder()
      .fromPath(environment.backendBaseUrl)
      .path('v1/download')
      .path(path)
      .path('?wettkampfid=' + this.wettkampfid)
      .build();
  }
}
