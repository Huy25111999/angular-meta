import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getListUsers } from '../states/users-management.actions';
import { Store } from '@ngrx/store';
import * as selector from '../states/users-management.selector';
import * as actions from '../states/users-management.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit, OnDestroy {

  formData: FormGroup = this.fb.group({
    userName:[null],
    phoneNumber:[null],
    status: [null],
    role: [null]
  })

  listStatus: any[] = [
    {name: "Active", value: 1},
    {name: "InActive", value: 0}
  ];

  listUser: any[] = [];
  pageIndex = 1;
  pageSize = 6;
  total = 0;
  private listUserSubscription?: Subscription;
  private lastRequestKey = '';


  constructor(
    private fb: FormBuilder,
    protected store: Store<any>
  ) { }

  ngOnInit(): void {
    this.listUserSubscription = this.store.select(selector.selectUserListSuccess).subscribe((res) => {
      if (!res) {
        return;
      }
      this.listUser = res.data || [];
      this.total = res.total || 0;
    });
    this.getListUsers();
  }

  ngOnDestroy(): void {
    this.listUserSubscription?.unsubscribe();
  }

  onSearch(){
    this.pageIndex = 1;
    this.getListUsers();
  }

  getListUsers(){
    const requestKey = `${this.pageIndex}:${this.pageSize}`;
    if (requestKey === this.lastRequestKey) {
      return;
    }

    this.lastRequestKey = requestKey;
    this.store.dispatch(getListUsers({
      payload: {
        page: this.pageIndex,
        per_page: this.pageSize
      }
    }));
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.getListUsers();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.getListUsers();
  }
}
