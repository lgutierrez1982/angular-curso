import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()//indica que esta es una clase que se podra inyectar
export class DbzService {

    //propiedades
    //getter an setter
    //contructor
    //metodos
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 14000
        }
      ];

    get personajes(): Personaje[] {//los geter son enviados por referencia podria manipularse en otro lado aunque sea private
        return [...this._personajes];//para evitar la relacion o referencia se usa [...] crea un nuevo 
                                    //arreglo de personajes, sirve para romper la referencia
    }  
      
    constructor() {
        console.log('Servicio inicializado');
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }

}