import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-buscado',
  templateUrl: './heroe-buscado.component.html',
  styleUrls: ['./heroe-buscado.component.scss']
})
export class HeroeBuscadoComponent {

  heroes:any[]=[];
  termino:string = '';

  constructor( private activatedRoute: ActivatedRoute , private _heroesService: HeroesService){ }

ngOnInit(){  

    this.activatedRoute.params.subscribe( params =>{

      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );

    })
}

}
