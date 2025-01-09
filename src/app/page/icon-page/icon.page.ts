import { Component } from '@angular/core';
import { GridTextDatasource, ColumnData } from 'src/app/mock/grid-text/grid-text.datasource';

import { IOperationalStatisticViewModel } from 'src/app/models/grid-text/grid-text-datasource.interface';
import { IMapColumn } from 'src/app/models/grid-text/grid-text-component.interface';
import { IIconInputData } from 'src/app/models/icon/icon-component.interface';

@Component({
  selector: 'icon-page',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss']
})
export class IconPageComponent {

  iconProperties: IIconInputData = {
    iconName: 'search',
    iconSize: '12px',
    iconColor: 'black',
    backgroundColor: 'blueviolet',
    tooltip: 'Подсказочка',
    gridDataCells: GridTextDatasource,
    gridDataColumn: ColumnData
  }

}
