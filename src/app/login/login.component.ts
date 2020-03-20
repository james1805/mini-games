import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.inicio();
  }

  public inicio(){
    setTimeout(() => {
      $(".imgInicio").css({"display":"none"})
      $(".login").css({"display":"flex"})
    }, 3000);
  }

  

}
