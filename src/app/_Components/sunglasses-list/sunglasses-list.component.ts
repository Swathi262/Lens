import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sunglasses } from 'src/app/_Models/sunglasses.model';
import { SunglassesService } from 'src/app/_Services/sunglasses.service';

@Component({
  selector: 'app-sunglasses-list',
  templateUrl: './sunglasses-list.component.html',
  styleUrls: ['./sunglasses-list.component.css']
})
export class SunglassesListComponent implements OnInit {

  // constructor() { }
  sunglasses?: Sunglasses[];



  constructor(private sunglassesService: SunglassesService,

    private router: Router) { }
  ngOnInit(): void {
    this.getSunGlasses ();

  }

  private getSunGlasses(){

    this.sunglassesService.getSunGlassesList().subscribe(data => {

      this.sunglasses = data;



    });

  }



    updatesunglasses(){

      this.router.navigate(['update-employee',]);

    }

    deletesunglasses(){}

}
  



