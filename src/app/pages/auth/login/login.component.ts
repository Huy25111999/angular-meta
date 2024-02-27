import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData: FormGroup = this.fb.group({
    username:[null],
    password:[null],
  })



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
