import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WcFormModule, WcTableModule } from './modules';

import { AppComponent } from './app.component';
import { TableDemoComponent } from './components/demo/table-demo/table-demo.component';
import { FormDemoComponent } from './components/demo/form-demo/form-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDemoComponent,
    FormDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    WcFormModule,
    WcTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
