import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  category;

  articles=[];

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.category=this.activatedRoute.snapshot.paramMap.get('category');

    var dir="./assets/data/articles/"+this.category+".json";

    fetch(dir).then(res => res.json()).then(json => {
      this.articles=json;
    });
  }

}
