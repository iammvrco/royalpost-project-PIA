import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  params={
    id:null,
    category:null
  };

  article={
    id:"",
    category:"",
    img:"",
    title:"",
    subtitle:"",
    date:"",
    author:"",
    text:""
  };


  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.params.category=this.activatedRoute.snapshot.paramMap.get('category');
    this.params.id=this.activatedRoute.snapshot.paramMap.get('id');

    var dir="./assets/data/articles/"+this.params.category+".json";

    fetch(dir).then(res => res.json()).then(json => {

      this.article=json[this.params.id-1];
      
    });
    
  }

}