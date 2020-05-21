import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { DownloadSpecComponent } from './download-spec/download-spec.component';
import { UploadSpecComponent } from './upload-spec/upload-spec.component';
import { JuryDetailsComponent } from './jury-details/jury-details.component';


const routes: Routes = [
  {
    path: '', component: CustomersComponent,
    children: [
      { path: 'download-spec', component: DownloadSpecComponent},
      {path: 'upload-spec', component: UploadSpecComponent},
      {path: 'jury-details', component: JuryDetailsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {
}
