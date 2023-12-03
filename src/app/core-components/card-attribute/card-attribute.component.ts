import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-attribute',
  templateUrl: './card-attribute.component.html',
  styleUrls: ['./card-attribute.component.scss']
})
export class CardAttributeComponent implements OnInit {
  title = 'Từ điển viễn thông';
  description = 'Từ điển về các thuật ngữ nghiệp vụ thuộc lĩnh vực viễn thông; bao gồm: Doanh thu, Thuê bao,\n' +
    '    Từ điển về các thuật ngữ nghiệp vụ thuộc lĩnh vực viễn thông; bao gồm: Doanh thu, Thuê bao,Từ điển về các thuật ngữ nghiệp vụ thuộc lĩnh vực viễn thông; bao gồm: Doanh thu, Thuê bao,\n'
  constructor() { }

  ngOnInit(): void {
  }

}
