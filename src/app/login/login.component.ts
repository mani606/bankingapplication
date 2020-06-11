import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormControl,Validator, Validators} from '@angular/forms';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/api/data.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 model: any = {
    email: '',
    password: ''
  }
  loginSuccess = false;
  loginForm:FormGroup;
  baseUrl: string = `${environment.baseUrl}/users`;
  constructor(private dataService: DataService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    })
  }
   /**
  * @description function for login the user
  */
  login() {
   
    
   // this.router.navigate(['dashboard'])
 
  this.dataService.validateLogin(this.baseUrl,this.model.email,this.model.password).subscribe((response:Array<any>)=>{
    sessionStorage.setItem("email",this.model.email);
    let responseArrayLength = response.length;
    if(responseArrayLength===1)
    {
        this.router.navigate(['/dashboard']);
        this.loginSuccess = true;
    }
    else
    {      
        alert("Invalid details");
    }
  },
  (error)=>{

  },
  ()=>{

  })
}
}

    