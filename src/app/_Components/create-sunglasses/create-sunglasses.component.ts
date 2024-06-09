import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sunglasses } from 'src/app/_Models/sunglasses.model';
import { SunglassesService } from 'src/app/_Services/sunglasses.service';

@Component({
  selector: 'app-create-sunglasses',
  templateUrl: './create-sunglasses.component.html',
  styleUrls: ['./create-sunglasses.component.css']
})
export class CreateSunglassesComponent implements OnInit {

  sunglasses: Sunglasses = new Sunglasses();

  constructor(private sunglassesService: SunglassesService,

    private router: Router) { }


  // constructor() { }

  ngOnInit(): void {

  }
  saveSunglasses(){

    this.sunglassesService.createSunGlasses(this.sunglasses).subscribe(data =>{

      console.log(data);

      this.goToSunglassesList();



    },

    error => console.log(error));

  }



  goToSunglassesList(){

    this.router.navigate(['/sunglasses']);




  }



  onSubmit(){

    console.log(this.sunglasses);

    this.saveSunglasses();



  }

}


