import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-dashboard',
  templateUrl: './global-dashboard.component.html',
  styleUrls: ['./global-dashboard.component.css']
})
export class GlobalDashboardComponent implements OnInit {

  columnDefs = [
      {headerName: 'Name', field: 'name', sortable: true, filter: true},
      {headerName: 'Project', field: 'project', sortable: true, filter: true},
      {headerName: 'Contact No.', field: 'contact', sortable: true, filter: true}
  ];

  rowData = [
      { name: 'ARHLSLLLKL', project: 'SDD-222-333', contact: '+91 9999999999'},
      { name: 'ARHLSLLLKL', project: 'SDD-222-333', contact: '+91 9999999999'},
      { name: 'ARHLSLLLKL', project: 'SDD-222-333', contact: '+91 9999999999'},
      { name: 'ARHLSLLLKL', project: 'SDD-222-333', contact: '+91 9999999999'},
      { name: 'ARHLSLLLKL', project: 'SDD-222-333', contact: '+91 9999999999'},
      { name: 'ARHLSLLLKL', project: 'SDD-222-333', contact: '+91 9999999999'},
      { name: 'ARHLSLLLKL', project: 'SDD-222-333', contact: '+91 9999999999'},
      { name: 'ARHLSLLLKL', project: 'SDD-222-333', contact: '+91 9999999999'},
      { name: 'ARHLSLLLKL', project: 'SDD-222-333', contact: '+91 9999999999'},
      { name: 'ARHLSLLLKL', project: 'SDD-222-333', contact: '+91 9999999999'},
      { name: 'ARHLSLLLKL', project: 'SDD-222-333', contact: '+91 9999999999'},
      { name: 'ARHLSLLLKL', project: 'SDD-222-333', contact: '+91 9999999999'}
  ];

  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [30, 40, 20, 70], label: 'Completed' }
  ];
  chartLabels = ['One', 'Two'];

  constructor() { }

  ngOnInit() {
  }

}
