import { Component, OnInit } from '@angular/core';
import { ITableOptions } from '@interfaces';
import { DataService } from '@services/data/data.service';
import { EEntity } from '@enums/demo/entity.enum';

@Component({
  selector: 'wc-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableDemoComponent implements OnInit {
  tableOptions?: ITableOptions;
  data: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const s1 = this.dataService.getSchema(EEntity.user).subscribe((opts) => {
      console.log('data opts', opts);
      this.tableOptions = opts;
    });
    const s2 = this.dataService.generate(EEntity.user).subscribe((data) => {
      this.data = data;
    });
  }

}
