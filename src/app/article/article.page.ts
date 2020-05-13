import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  artist = {
    title:"",
    subtitle:"",
    author:"",
    date:"",
    text:"",
    img:""
  }

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.artist.title=this.activatedRoute.snapshot.paramMap.get('title');
    this.artist.subtitle=this.activatedRoute.snapshot.paramMap.get('subtitle');
    this.artist.author=this.activatedRoute.snapshot.paramMap.get('author');
    this.artist.date=this.activatedRoute.snapshot.paramMap.get('date');
    this.artist.text=this.activatedRoute.snapshot.paramMap.get('text');
    this.artist.img=this.activatedRoute.snapshot.paramMap.get('img');
  }

}