import { Component, Input } from '@angular/core';

import { IIconInputData, IIconProperties } from 'src/app/models/icon/icon-component.interface';

@Component({
  selector: 'icon-component',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() iconProperties?: IIconInputData

  iconFocus:boolean = false

  getIconStyle():IIconProperties {
    return {
      color: this.iconProperties?.iconColor || "black",
      fontSize: this.iconProperties?.iconSize || "14px",
      backgroundColor: this.iconProperties?.backgroundColor || "white"
    }
  }

  addActiveFocus() {
    this.iconFocus = !this.iconFocus
  }
}
