import { Component, Input, OnInit } from '@angular/core';
import { ITableOptions } from '@interfaces';
import { getFieldLabel } from '@constants';
import * as lodash from 'lodash';
import { ITableCell } from '@src/app/interfaces/table-options.interface';
import { EPageSize } from '@src/app/enums/generic.enum';


@Component({
  selector: 'wc-table',
  templateUrl: './wc-table.component.html',
  styleUrls: ['./wc-table.component.scss']
})
export class WcTableComponent implements OnInit {

  @Input() options?: ITableOptions;
  @Input() data?: any[];
  @Input() size: number = 0;
  @Input() page: number = 1;
  @Input() pageSize: number = EPageSize.U10;

  sizes = Object.values(EPageSize).filter((v: any) => !isNaN(v));

  datasource: any = [];

  cellAutoruns: any = [];

  constructor() { }

  ngOnInit(): void {
    this.initSetup();
    this.initDataSetup();
    this.size = this.data?.length || 0;
    this.datasource = this.getCurrentDatasource();
  }

  initSetup() {
    this.cellAutoruns = [];
    for (let cell of (this.options?.cells || [])) {
      const { actions = [] } = cell;
      for (let action of actions) {
        if (action?.autorun) {
          this.cellAutoruns.push(action.type);
        }
      }
    }
    if (this.options?.linenumbers) {
      this.options?.columns?.unshift({ label: '#' });
      this.options?.cells?.unshift({ field: ['__trans', 'lineNo'] });
    }
  }

  initDataSetup() {
    this.data = this.data?.map((row, ix) => {
      row.__trans = {};
      lodash.set(row, ['__trans', 'lineNo'], ix + 1);
      return row;
    });
  }

  getCurrentDatasource(): any[] {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    return (this.data || [])?.slice(start, end);
  }

  trackBy(_index: number, item: any) {
    return item.__trans.lineNo;
  }

  getLabel(column: any) {
    if (!column) {
      return null;
    }
    if (typeof column === 'string') {
      return lodash.startCase(column);
    }
    if (column.label) {
      return column.label;
    }
    const key = column.field || column.columnName || column.key;
    const label = getFieldLabel(key)
    return label || lodash.startCase(key);
  }

  onPageChange() {
    this.datasource = this.getCurrentDatasource();
  }

  getValue(cell: ITableCell, row: any) {
    const { field } = cell;
    if (!field) {
      return null;
    }
    return lodash.get(row, field);
  }

}
