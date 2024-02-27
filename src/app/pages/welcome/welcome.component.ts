import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {AlphabetDictionaryDTO, DICTIONARY} from "../../core-components/constant/alphabet-dictionary";
import {NzModalService} from "ng-zorro-antd/modal";
import {ModalConfirmComponent} from "../../core-components/modal-confirm/modal-confirm.component";
import {ModalService} from "../../common-services/modal-service.service";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  groupDictionary = new Set<string>();
  arryGroupDictionary = new Array<AlphabetDictionaryDTO>()
  items = [
    '12',
    '1234',
    'á HAShsd',
    'a casd',
    'đv asdc',
    'xv  wd',
    ' yasdasd',
    'ê asd',
    'ơ asdff',
    'ớff',
    'á x',
    'ắ b',
    'uvn',
    0,
    'ấx',
    'dv', 'ew'
  ];
  object = {
    key: '1',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park'
  }
  listOfData = [
    [
      {
        name: 'John Brown',
        key: '1',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
      {
        name: 'John Brown',
        key: '1',
        age: 322,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
    ],
    [
      {
        name: 'John Brown',
        key: '1',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
      {
        name: 'John Brown',
        key: '1',
        age: 322,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
    ],
    [
      {
        name: 'John Brown',
        key: '1',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
      {
        name: 'John Brown',
        key: '1',
        age: 322,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
    ],
    [
      {
        name: 'John Brown',
        key: '1',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
      {
        name: 'John Brown',
        key: '1',
        age: 322,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
    ],
    [
      {
        name: 'John Brown',
        key: '1',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
      {
        name: 'John Brown',
        key: '1',
        age: 322,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
    ],

  ];
  keys: any[] = ['key', 'age', 'tel', 'phone', 'address']

  constructor(private modal: NzModalService,
              private viewContainerRef: ViewContainerRef,
              private commonModalService: ModalService,
              private notification: NzNotificationService) {
  }

  ngOnInit() {
  }


  group(items: any): any[] {
    let groupDictionary = new Set<string>();
    items.forEach((e: any) => {
      let firstCharacters = e.toString().trim()[0];
      firstCharacters = this.normalize(firstCharacters);
      groupDictionary.add(firstCharacters.toLocaleUpperCase());
    })

    const DICTIONARY = Array.from(groupDictionary).map(e => {
      return new AlphabetDictionaryDTO(e, e, []);
    });
    DICTIONARY.sort((a: any, b: any) => {
      return a.group?.localeCompare(b.group);
    })
    DICTIONARY.forEach(e => {
      const sameGroup = items.filter((item: any) => {
        let first = this.normalize(item.toString().trim()[0]).toUpperCase();
        return first === e.group;
      });
      if (sameGroup && sameGroup.length) {
        e.items = [...sameGroup];
      }
    });
    return DICTIONARY;
  }

  normalize(character: string) {
    let renewCharacter = character.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    renewCharacter = renewCharacter.replace(/[đĐ]/g, m => m === 'đ' ? 'd' : 'D');
    return renewCharacter;
  }

  createDictionary(items: any) {
    // // group
    const dictionary = this.group(items);
    console.log(dictionary);
  }

  sort() {
    this.createDictionary(this.items);
  }

  createComponentModal(): void {
    const modal = this.commonModalService.openModal({type: 'SUCCESS', content: 'Phê duyệt thành công' },);
    modal.afterClose.subscribe(res => {
      console.log(res)
    })
  }

  noityfi() {
    this.notification.error(
      'Thông báo lỗi',
      "Không thể phê duyệt thuật ngữ có trạng thái là nháp",
      {
        nzKey: Math.random().toString(),
        nzPlacement: 'bottomRight',
        nzDuration: 10000000000,
        nzStyle: {
          width: '600px',
        },
        nzClass: 'custorm-error'
      }
    )
  }
}
