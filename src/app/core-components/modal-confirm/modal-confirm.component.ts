import {Component, Input, OnInit} from '@angular/core';
import {ModalDto} from "./modal-dto";
import {NzModalRef} from "ng-zorro-antd/modal"
@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],

})
export class ModalConfirmComponent implements OnInit {
  @Input() modalDTO: ModalDto | undefined;
  @Input() close: Function | undefined;
  @Input() accept: any;
  type: undefined | string = '';
  title: undefined | string = '';
  content: undefined | string = '';

  constructor(private modal: NzModalRef) {
  }

  ngOnInit(): void {
    this.type = this.modalDTO && this.modalDTO.type;
    this.title = this.modalDTO && this.modalDTO.title;
    this.content = this.modalDTO && this.modalDTO.content;
    const removePaddingE = document.getElementsByClassName('ant-modal-body');
    if (removePaddingE && removePaddingE.length) {
      removePaddingE[0].classList.add('noPadding');
    }
  }

  closeModal() {
    this.modal.close('close');
  }

  acceptCloseModal() {
    this.modal.close('accept');
  }


  getColor(type: string): string {
    switch (type) {
      case 'WARNING':
        return 'warningColor';
      case 'ERROR':
        return 'dangerColor'
      case 'SUCCESS':
        return 'successColor'
      case 'NOTIFY':
        return 'infoColor'
      default: {
        return 'warningColor';
      }
    }
  }

  get getTitle(): string {
    if(this.type){
      switch (this.type) {
        case 'WARNING':
          return 'Cảnh báo';
        case 'ERROR':
          return 'Thông báo lỗi'
        case 'SUCCESS':
          return 'Thành công'
        case 'NOTIFY':
          return 'Thông tin'
        default: {
          return 'Thông báo';
        }
      }
    }else{
      return "Thông báo"
    }

  }
}
