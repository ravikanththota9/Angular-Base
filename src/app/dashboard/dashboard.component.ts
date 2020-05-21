import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedProject: any;

  columnDefs = [
      {headerName: 'Priority', field: 'priority', sortable: true, filter: true},
      {headerName: 'Task ID', field: 'taskid', sortable: true, filter: true},
      {headerName: 'Task Name', field: 'taskname', sortable: true, filter: true},
      {headerName: 'Contractor', field: 'contractor', sortable: true, filter: true},
      {headerName: 'Due Date', field: 'duedate', sortable: true, filter: true},
      {headerName: 'Status', field: 'status', sortable: true, filter: true}
  ];

  rowData = [
      { priority: 'In Progress', taskid: 'SDD-222-333', taskname: 'Sample job', contractor: 'Tom Hanks', duedate: '20 May, 2020', status: 'Completed'},
      { priority: 'In Progress', taskid: 'SDD-222-333', taskname: 'Sample job', contractor: 'Tom Hanks', duedate: '20 May, 2020', status: 'Completed'},
      { priority: 'In Progress', taskid: 'SDD-222-333', taskname: 'Sample job', contractor: 'Tom Hanks', duedate: '20 May, 2020', status: 'Completed'},
      { priority: 'In Progress', taskid: 'SDD-222-333', taskname: 'Sample job', contractor: 'Tom Hanks', duedate: '20 May, 2020', status: 'Completed'},
      { priority: 'In Progress', taskid: 'SDD-222-333', taskname: 'Sample job', contractor: 'Tom Hanks', duedate: '20 May, 2020', status: 'Completed'},
      { priority: 'In Progress', taskid: 'SDD-222-333', taskname: 'Sample job', contractor: 'Tom Hanks', duedate: '20 May, 2020', status: 'Completed'},
      { priority: 'In Progress', taskid: 'SDD-222-333', taskname: 'Sample job', contractor: 'Tom Hanks', duedate: '20 May, 2020', status: 'Completed'}
  ];

  projects = [
      {id: 1, name: 'Vilnius'},
      {id: 2, name: 'Kaunas'},
      {id: 3, name: 'Pavilnys'},
      {id: 4, name: 'Pabradė'},
      {id: 5, name: 'Klaipėda'}
  ];

  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [30, 70], label: 'Completed' }
  ];
  chartLabels = ['Completed', 'Remaining'];
  
  constructor() { }

  ngOnInit() {
  }

}
