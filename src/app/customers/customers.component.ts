import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  downloadLink: any;
  uploadLink: any;

  constructor() { }

  ngOnInit() {
    this.downloadLink = "active";
    this.uploadLink = "inactive";
  }

  onUploadSelectTab(){
    this.downloadLink = "inactive";
    this.uploadLink = "active";
  }

  onDownloadSelectTab(){
    this.downloadLink = "active";
    this.uploadLink = "inactive";
  }

}
