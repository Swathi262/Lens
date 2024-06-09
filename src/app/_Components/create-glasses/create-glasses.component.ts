import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Glasses } from 'src/app/_Models/glasses.model';
import { GlassesService } from 'src/app/_Services/glasses.service';

@Component({
  selector: 'app-create-glasses',
  templateUrl: './create-glasses.component.html',
  styleUrls: ['./create-glasses.component.css']
})
export class CreateGlassesComponent implements OnInit {
  glasses: Glasses = new Glasses();
  constructor(private glassesService: GlassesService,

    private router: Router) { }

  ngOnInit(): void {
  }
  saveGlasses(){

    this.glassesService.createGlasses(this.glasses).subscribe(data =>{

      console.log(data);

   

    },

    error => console.log(error));

  }



  goToGlassesList(){

  }

  onSubmit(){

    console.log(this.glasses);

    this.saveGlasses();

  }

}
