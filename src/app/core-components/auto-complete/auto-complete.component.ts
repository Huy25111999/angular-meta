import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit, AfterViewInit {
  @Input() placeholder: string | undefined
  @Input() height: string | undefined
  @Input() width: string | undefined
  @Input() formControl: AbstractControl | undefined
  textSearch: string | any;
  @Input() optionGroups: any[] | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.optionGroups = [
        {
          icon: 'wiki',
          title: 'Tổng doanh thu viễn thông trong nước',
          tag: 'Thuật ngữ',
          description: 'Từ điển: Viễn thông > Danh mục: Doanh thu > Thuật ngữ: Tổng doanh thu viễn thông trong nước'
        },
        {
          icon: 'book',
          title: 'Tổng doanh thu viễn thông trong nước',
          tag: 'Thuật ngữ',
          description: 'Từ điển: Viễn thông > Danh mục: Doanh thu > Thuật ngữ: Tổng doanh thu viễn thông trong nước'
        },
        {
          icon: 'folder',
          title: 'Tổng doanh thu viễn thông trong nước',
          tag: 'Thuật ngữ',
          description: 'Từ điển: Viễn thông > Danh mục: Doanh thu > Thuật ngữ: Tổng doanh thu viễn thông trong nước'
        },
        {
          icon: 'wiki',
          title: 'Tổng doanh thu viễn thông ngoài nước',
          tag: 'Thuật ngữ',
          description: 'Từ điển: Viễn thông > Danh mục: Doanh thu > Thuật ngữ: Tổng doanh thu viễn thông trong nước'
        }
      ]
    }, 1000)
  }

  deleteSearchText() {
    this.textSearch = null;
  }

  log(event: any) {
    console.log(event);
  }

  onChange($event: any) {
    this.textSearch = $event.title;
  }

}
