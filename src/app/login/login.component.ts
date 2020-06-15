import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataService } from 'src/app/service/api/data.service';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login-model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 model: Login = {
    email: '',
    password: ''
  }
  loginSuccess = false;
  loginForm:FormGroup;
  baseUrl: string = `${environment.baseUrl}/users`;
  private subscription:Subscription;
  constructor(private dataService: DataService,private fb:FormBuilder,private router:Router) { }
 // pattern: string = "[a-z_%+-]*(@gmail.com|abc.com)";
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    })
  }
   /**
  * @description function for login the user details
  */
  login() {
       
    this.subscription = this.dataService.validateLogin(this.baseUrl,this.loginForm.get('email').value,this.loginForm.get('password').value)
  .subscribe((response:Array<any>)=>{
    sessionStorage.setItem("email",response[0].email);
    let responseArrayLength = response.length;
    if(responseArrayLength===1)
    {
        this.router.navigate(['/summary']);
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
ngOnDestroy(): void {    
  console.log("In ngOnDestroy:",this.subscription);
  this.subscription.unsubscribe();    
}

}

    