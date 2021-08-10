import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //con este input le decimos a angular, estos personajes vendran desde el componente padre
 // @Input('personajes') personajes: Personaje[] = [];

 get personajes() {
  return this.dbzService.personajes;
 }

 constructor(private dbzService: DbzService) {

 }

}
