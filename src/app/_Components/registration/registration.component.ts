import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/_Models/customer.model';
import { User } from 'src/app/_Models/user.model';
import { RegistrationService } from 'src/app/_Services/registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   customer=new Customer();
   msg='';
   user=new User();
  constructor(private _service:RegistrationService,private _router:Router) {
   // this.customer.user=new User();
   }

  ngOnInit(): void {
    
  }

  registerUser(){
    // this._service.loginUserFromRemote(this.user).subscribe(
     
    //     data =>console.log("response received"),
    //     error=>console.log("exception occured")
      
       
    //    )
   this.customer.user=this.user;
    this.customer.user.role="CUSTOMER";
    this._service.registerUserFromRemote(this.customer)
    .subscribe({
      next: (res) => {
        console.log(res);
        this._router.navigate(['/login'])
        //this.msg="registration success";
        
      },
      error :(e)=> {
        // console.log(e);
        
        console.log("exception occured");
         this.msg=e.error();
         
      }
    });
  }

}
