import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-dictionary',
  templateUrl: './data-dictionary.component.html',
  styleUrls: ['./data-dictionary.component.scss']
})
export class DataDictionaryComponent implements OnInit {
  arrry = [1,2,3,4,5,6,7,8,9]
  constructor() { }

  ngOnInit(): void {
  }

}
