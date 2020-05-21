import { Component, OnInit , ViewChild} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-download-spec',
  templateUrl: './download-spec.component.html',
  styleUrls: ['./download-spec.component.scss']
})
export class DownloadSpecComponent implements OnInit {

  selectedProject: any;
  tableValueSelected: boolean = false;

  projects = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'},
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'},
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'},
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'},
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'},
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'},
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'},
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'},
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'},

];
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.tableValueSelected = false;
  }

  getValues() {
    this.spinner.show();   
    console.log(this.selectedProject);
    if(this.selectedProject != null) {
      this.tableValueSelected = true;    
    } else { 
      this.tableValueSelected = false;
    }
    this.spinner.hide();
  }

}
