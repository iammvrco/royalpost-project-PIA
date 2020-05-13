import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numberOne : any;

  constructor( private router : Router, public http : HttpClient ) {

  }

  ngOnInit(){
    fetch("./assets/data/data.json").then(res => res.json()).then(json => {
      this.numberOne=json;
    })
  }

  vertical={
    direction:"vertical",
  };

  horizontal={
    direction:"horizontal",
    loop:true,
  };

  gotoArticle(title,subtitle,author,date,text,img){
    this.router.navigate( ['/article',title,subtitle,author,date,text,img] );
  }

}
