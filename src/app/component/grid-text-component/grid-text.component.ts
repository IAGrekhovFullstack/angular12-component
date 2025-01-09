import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IMapColumn } from 'src/app/models/grid-text/grid-text-component.interface';

@Component({
  selector: 'grid-text-component',
  templateUrl: './grid-text.component.html',
  styleUrls: ['./grid-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridTextComponent implements OnInit {
  
  @Input() dataSource:any[] = [];
  @Input() displayedColumns?:string[] = [];
  @Input() columnMap?:IMapColumn[] = [];

  ngOnInit(): void {
    this.columnMap?.forEach(
      item => this.displayedColumns?.push(item.code)
    )
  }
}
