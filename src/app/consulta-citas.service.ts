import { Injectable, EventEmitter } from '@angular/core';
import { Cita } from './Modelo/cita';
import { ConfiguracionService } from './configuracion.service';


@Injectable({
  providedIn: 'root'
})

export class ConsultaCitasService {

  citaEliminada = new EventEmitter<void>();

  private _cita:Cita[] = []

  constructor(private configuracionService:ConfiguracionService) { 
    
    this._cita = [
    //citas de ejemplo, estas las carque en para que esten precargadas ya uqe no si exite una amenos queda la embarrada.

    //new Cita ("El auténtico conocimiento es conocer la extensión de la propia ignorancia.","Confucio",1),
    //new Cita ("La única manera de hacer un gran trabajo es amar lo que haces.","Steve Jobs",2),
    //new Cita ("Nuestra mayor gloria no está en no caer nunca, sino en levantarnos cada vez que caemos.","Confucio",3),
    //new Cita ("El hombre que no se atreve a arriesgar nada nunca logra nada.", "Muhammad Ali",4),
    //new Cita ("No es el tamaño del perro en la pelea, sino el tamaño de la pelea en el perro.", "Winston Churchill", 6),
    //new Cita ("Un hombre puede ser destruido, pero no derrotado.", "Nelson Mandela", 7),
  
    ]
    
    this.cargarCitas();
  }

  async cargarCitas() {
    this._cita = await this.configuracionService.getListaCitas() || [];
  }

  async guardarCitas() {
    await this.configuracionService.setListaCitas(this._cita);
  }

  async getCitaRandom(): Promise<Cita> {
    // cargamos las citas
    const listaCitas = await this.configuracionService.getListaCitas() || [];
    // guardamos en random uno de los elemntos de la lista 
    const random = Math.floor(Math.random() * listaCitas.length);
    // retornamos solo un elemento de lista al azar
    return listaCitas[random];
  }

  async getListaCitas(): Promise<Cita[]> {
    return await this.configuracionService.getListaCitas() || [];
  }

  async addCita(nuevaCita: Cita) {
    
    const ultimoId = this._cita.length ? this._cita[this._cita.length - 1].id : 0;
    const nuevasCita = new Cita(nuevaCita.cita, nuevaCita.autor, ultimoId + 1);
    this._cita.push(nuevasCita);
    await this.guardarCitas();
  }

  eliminarCita(cita: Cita) {
    const index = this._cita.findIndex(c => c.id === cita.id);
    if (index !== -1) {
      this._cita.splice(index, 1);
      this.guardarCitas();
      this.citaEliminada.emit();
    }
  }
}