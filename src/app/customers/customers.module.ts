import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { DownloadSpecComponent } from './download-spec/download-spec.component';
import { CustomersRoutingModule } from './customers.module.routing';
import { UploadSpecComponent } from './upload-spec/upload-spec.component';
import { NgSelectModule } from '@ng-select/ng-select';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JuryDetailsComponent } from './jury-details/jury-details.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    CustomersRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  declarations: [
    CustomersComponent,
    DownloadSpecComponent,
    UploadSpecComponent,
    JuryDetailsComponent
  ]
})
export class CustomersModule { }
