import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  top=[] ;

  constructor( private router : Router, public http : HttpClient ) {

  }

  ngOnInit(){
    fetch("./assets/data/articles/authors.json").then(res => res.json()).then(json => {
      this.top[0]=json[json.length-1];
    });
    fetch("./assets/data/articles/music.json").then(res => res.json()).then(json => {
      this.top[1]=json[json.length-1];
    });
    fetch("./assets/data/articles/sports.json").then(res => res.json()).then(json => {
      this.top[2]=json[json.length-1];
    });
  }

  vertical={
    direction:"vertical",
  };

  horizontal={
    direction:"horizontal",
    loop:true,
  };

  /*gotoArticle(category,id){
    this.router.navigate( ['/article',category,id] );
  }*/

}
