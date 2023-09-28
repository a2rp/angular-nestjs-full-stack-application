import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './users/form/form.component';
import { TableComponent } from './users/table/table.component';
import { IntegrationComponent } from './users/integration/integration.component';
import { ViewingComponent } from './pdf/viewing/viewing.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    IntegrationComponent,
    ViewingComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
