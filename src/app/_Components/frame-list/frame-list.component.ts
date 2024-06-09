import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Frame } from 'src/app/_Models/frame.model';
import { FramesService } from 'src/app/_Services/frames.service';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.css']
})
export class FrameListComponent implements OnInit {

 // constructor() { }
 frames?: Frame[];



 constructor(private frameService: FramesService,

   private router : Router) { }


  ngOnInit(): void {
    this.getFrames();

  }



  private getFrames(){

    this.frameService.getFramesList().subscribe(data => {

      this.frames = data;

    });

  }
    updateFrame(){
      this.router.navigate(['update-frame']);
    }
    deleteframes(){
      
    }
  }

  


