import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) {
    localStorage.setItem("currentuser","");
          localStorage.setItem("role","");
   }

  ngOnInit(): void {
  }

  registerLogin(){
    this._router.navigate(['/login']);
  }

}
