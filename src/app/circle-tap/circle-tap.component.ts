import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-tap',
  templateUrl: './circle-tap.component.html',
  styleUrls: ['./circle-tap.component.css']
})
export class CircleTapComponent implements OnInit {

  public ejeX:number = Math.floor(Math.random() * (window.innerWidth-(window.innerWidth*0.25))) + 1;
  public ejeY:number = Math.floor(Math.random() * (window.innerHeight-(window.innerHeight*0.25))) + 1;
  public puntaje:number = 0;
  public contador:number = 50;
  public sizeScreenWidth:number;  
  public sizeScreenHeight:number;
  public time:number = 50;

  constructor() { }

  ngOnInit() { 
    this.sizeScreenWidth = window.innerWidth;
    this.sizeScreenHeight = window.innerHeight;   
    this.drawFigure(this.contador);
    this.timeClock(this.time)
    
  }

  public timeClock(time){
    setTimeout(() => {
      if (time>0) {
        time -= 1
        this.time = time;
        this.timeClock(time);
      }      
    }, 1000);
    if(time == 0){
      console.log('GAME OVER');
    }
  }

  public drawFigure(contador){    
    $(".tapButton").css({"margin-left": `${this.ejeX}px`, "margin-top": `${this.ejeY}px`});
      
    setTimeout(() => {
      if(contador > 0){  
     
        this.ejeX = Math.floor(Math.random() * (this.sizeScreenWidth - (this.sizeScreenWidth * 0.25))) + 1;
        this.ejeY = Math.floor(Math.random() * (this.sizeScreenHeight - (this.sizeScreenHeight * 0.25))) + 1; 
        $(".tapButton").css({"margin-left": `${this.ejeX}px`, "margin-top": `${this.ejeY}px`});      
      
        contador = contador - 1;
      
        this.drawFigure(contador);
      }
    }, 1000);
  }
  
  public tap(){
    if(this.time > 0){
      this.puntaje += 1;
    }
        
  }

}
