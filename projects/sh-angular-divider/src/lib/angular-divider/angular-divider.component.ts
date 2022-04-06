import { Component, Input, OnInit } from '@angular/core';
import { Align } from './shared/enum/align.enum';
import { IDividerConfig } from './shared/model/divider-config.interface';

@Component({
  selector: 'sh-angular-divider',
  templateUrl: './angular-divider.component.html',
  styleUrls: ['./angular-divider.component.scss']
})
export class AngularDividerComponent implements OnInit {
  @Input() text: string = '';
  @Input() config: IDividerConfig = {};
  defaultColor: string = '#dedede';
  get align() {
    return Align;
  }
  constructor() { }

  ngOnInit() {
    if (!this.config?.textAlign) {
      this.config.textAlign = 'center'
    }
  }

}
