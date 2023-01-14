import { Component } from '@angular/core';

import { HeroesService, Heroe } from 'src/app/services/heroes.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes:Heroe[] = [];

  constructor( private _heroesService: HeroesService , private router:Router){
    
  }

  ngOnInit(){

    this.heroes = this._heroesService.getHeroes();
    console.log("estos son los heroes", this.heroes)
  }

  verHeroe( i:number ){
  this.router.navigate([ '/heroe', i ]);
  }

}


