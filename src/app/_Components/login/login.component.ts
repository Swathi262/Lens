import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/_Models/user.model';

import { RegistrationService } from 'src/app/_Services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 export class LoginComponent implements OnInit {
  
     user=new User();
     msg='';
  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    // this._service.loginUserFromRemote(this.customer).subscribe(
     
    //   data =>console.log("response received"),
    //   error=>console.log("exception occured")
    
     
    //   )
    this._service.loginUserFromRemote(this.user)
      .subscribe({
        next: (res) => {
          console.log(res);
          // alert(res)
          this.user=new User();
          this.user=res;
          if(this.user.role=="ADMIN"){
            this._router.navigate(['/products']);
          }
          else{

          this._router.navigate(['/loginsuccess']);
          }
          localStorage.setItem("currentuser",this.user.userName);
          localStorage.setItem("role",this.user.role);
        },
        error:(e) => {
          console.log(e);
          this.msg="Bad credentials,please enter valid userName and password";
        }
      });
    
}
gotoregistration(){
  this._router.navigate(['/registration'])
}
}
