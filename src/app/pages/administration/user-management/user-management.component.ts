import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  
  formData: FormGroup = this.fb.group({
    userName:[null],
    phoneNumber:[null],
    status: [null]
  })

  listStatus: any[] = [
    {name: "Active", value: 1},
    {name: "InActive", value: 0}
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSearch(){
    let data = this.formData.getRawValue();
    console.log("data--:", data);
  }
}
