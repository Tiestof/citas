import { Injectable } from '@angular/core';
import { Cita } from './Modelo/cita';


@Injectable({
  providedIn: 'root'
})


export class ConsultaCitasService {

  private _cita:Cita[] = [
    //citas de ejemplo 
    new Cita ("El auténtico conocimiento es conocer la extensión de la propia ignorancia.","Confucio",1),
    new Cita ("La única manera de hacer un gran trabajo es amar lo que haces.","Steve Jobs",2),
    new Cita ("Nuestra mayor gloria no está en no caer nunca, sino en levantarnos cada vez que caemos.","Confucio",3),
    new Cita ("El hombre que no se atreve a arriesgar nada nunca logra nada.", "Muhammad Ali",4),
    new Cita ("No es el tamaño del perro en la pelea, sino el tamaño de la pelea en el perro.", "Winston Churchill", 6),
    new Cita ("Un hombre puede ser destruido, pero no derrotado.", "Nelson Mandela", 7),

  ]


  constructor() { }


  getCitaRandom(): Cita {

    // guardamos en random uno de los elemntos de la lista 
    const random = Math.floor(Math.random() * this._cita.length);

    // retornamos solo un elemento de lista al azar
    return this._cita[random];
  }

  getListaCitas() {

    return this._cita;

  }

  addCita(nuevaCita: Cita) {

    // Obtenemos el último ID de la lista 
    const ultimoId = this._cita.length ? this._cita[this._cita.length - 1].id : 0;

    // Creamos una nueva cita con el ID + 1 
    const nuevasCita = new Cita(nuevaCita.cita, nuevaCita.autor, ultimoId + 1);

    // Añadimos la nueva cita a la lista
    this._cita.push(nuevasCita);
  }


}
