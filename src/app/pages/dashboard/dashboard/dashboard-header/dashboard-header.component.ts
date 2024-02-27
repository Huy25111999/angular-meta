import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  selectedValue: any;
  listOfOption: any[] = [
    {label: 'Lĩnh vực AI', value: 1},
    {label: 'Lĩnh vực DS', value: 2},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
