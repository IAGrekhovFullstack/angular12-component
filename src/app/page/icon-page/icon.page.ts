import { Component } from '@angular/core';
import { GridTextDatasource, ColumnData } from 'src/app/mock/grid-text/grid-text.datasource';

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
    iconColor: 'white',
    backgroundColor: 'blueviolet',
    tooltip: 'Подсказочка',
    gridDataCells: GridTextDatasource.Workplaces[0].PlanExecution,
    gridDataColumn: ColumnData
  }
}
