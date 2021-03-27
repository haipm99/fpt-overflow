import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  homeSelected = true;
  questionSelected = false;


  constructor() {

  }

  ngOnInit(): void {
    
  }


  changeUrl(value: string) {
    switch (value) {
      case 'home':
        this.homeSelected = true;
        this.questionSelected = false;
        break;
      case 'question':
        this.questionSelected = true;
        this.homeSelected = false;
        break;
    }
  }

}