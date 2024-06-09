import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Frame } from 'src/app/_Models/frame.model';
import { FramesService } from 'src/app/_Services/frames.service';

@Component({
  selector: 'app-create-frame',
  templateUrl: './create-frame.component.html',
  styleUrls: ['./create-frame.component.css']
})
export class CreateFrameComponent implements OnInit {

 // constructor() { }
 frame : Frame = new Frame();

  constructor(private frameService: FramesService,

    private router: Router) { }


 

  ngOnInit(): void {}
    saveFrame(){

      this.frameService.createFrame(this.frame).subscribe( data => {
  
        console.log(data);
  
        this.goToFrameList();
  
      },
  
      error => console.log(error));
  
    }
  
  
  
    goToFrameList(){
  
      this.router.navigate(['/frames']);
  
    }
  
   
  
    onSubmit(){
  
      console.log(this.frame);
  
      this.saveFrame();
  
     
  
    }
  
  
  
  }
  
  


