import {Injectable} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {ModalConfirmComponent} from "../core-components/modal-confirm/modal-confirm.component";
import {ModalDto} from "../core-components/modal-confirm/modal-dto";

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalS: NzModalService,
              ) {
  }

  openModal(modalDTO: ModalDto ){
    const modal = this.modalS.create({
      nzContent: ModalConfirmComponent,
      nzClosable: false,
      nzCentered: true,
      nzFooter: null,
      nzMaskClosable: false,
      nzComponentParams:{
        modalDTO: modalDTO,
        close: (data: any) => modal.destroy(data),
        accept: (data: any) => modal.destroy(data)
      }
    });
    return modal
  }
}
