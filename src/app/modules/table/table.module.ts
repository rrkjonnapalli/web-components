import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcTableComponent } from './component/wc-table.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WcTableComponent
  ],
  exports: [
    WcTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbPaginationModule,
    SharedModule
  ]
})
export class WcTableModule { }
