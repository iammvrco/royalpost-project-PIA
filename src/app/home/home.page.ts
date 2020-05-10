import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router : Router ) {}

  vertical={
    direction:"vertical",
  };

  horizontal={
    direction:"horizontal",
    loop:true,
  };

  numberOne=[
    {
      id:1,
      img:"../../assets/number one/BTR.png",
      title:"Big Time Rush prepara su regreso después de 10 años.",
      subtitle:"Tras ausentarse de las cámaras, los integrantes de BTR anuncian que...",
    },
    {
      id:2,
      img:"../../assets/number one/JS Napoleon.png",
      title:"Soy Napoleón",
      subtitle:"Napoléon anuncia el lanzamiento de su más reciente obra literaria en...",
    },
    {
      id:3,
      img:"../../assets/number one/Enjambre.png",
      title:"A la espera de iniciar su gira por México",
      subtitle:"La agrupación mexicana ha dado a conocer que durante su gira visitarán...",
    },
  ];

  gotoArticle(){
    this.router.navigate( ['/article'] );
  }

}
