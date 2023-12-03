import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.scss']
})
export class PropertyManagementComponent implements OnInit {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12]

  constructor() {
  }

  ngOnInit(): void {
  }

}
