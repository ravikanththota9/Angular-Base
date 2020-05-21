import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-spec',
  templateUrl: './upload-spec.component.html',
  styleUrls: ['./upload-spec.component.scss']
})
export class UploadSpecComponent implements OnInit {

  selectedProject: any;

  projects = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys'},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

  constructor() { }

  ngOnInit(): void {
  }

}
