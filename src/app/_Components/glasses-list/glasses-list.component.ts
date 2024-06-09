import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Glasses } from 'src/app/_Models/glasses.model';
import { GlassesService } from 'src/app/_Services/glasses.service';



@Component({
  selector: 'app-glasses-list',
  templateUrl: './glasses-list.component.html',
  styleUrls: ['./glasses-list.component.css']
})
export class GlassesListComponent implements OnInit {
  glasses?: Glasses[]
  

  constructor(private glassesService: GlassesService,

    private router: Router) { }

  ngOnInit(): void {
    this.getGlasses();
  }
  private getGlasses(){

    this.glassesService.getGlassesList().subscribe(data => {

      this.glasses = data;

    });

  }

  updateGlasses(){

    this.router.navigate(['update-glasses']);



  }

  deleteGlasses(){

   

  }

}
