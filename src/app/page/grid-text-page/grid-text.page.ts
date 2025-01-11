import { Component } from '@angular/core';
import { GridTextDatasource, ColumnData } from 'src/app/mock/grid-text/grid-text.datasource';

import { IOperationalStatisticViewModel } from 'src/app/models/grid-text/grid-text-datasource.interface';
import { IMapColumn } from 'src/app/models/grid-text/grid-text-component.interface';

@Component({
  selector: 'grid-text-page',
  templateUrl: './grid-text.page.html',
  styleUrls: ['./grid-text.page.scss']
})
export class GridTextPageComponent {

  datasource: IOperationalStatisticViewModel = GridTextDatasource
  header: IMapColumn[] = ColumnData
}