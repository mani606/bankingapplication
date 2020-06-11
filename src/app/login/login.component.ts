import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormControl,Validator, Validators} from '@angular/forms';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    })
     /* this.loginForm = this.fb.group({
       userName: ['',Validators.required],
       password: ['',[Validators.required,Validators.email]]
     }) */
  }
  login() {

  }

}
