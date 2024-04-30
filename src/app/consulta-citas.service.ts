import { Injectable, EventEmitter } from '@angular/core';
import { Cita } from './Modelo/cita';
import { ConfiguracionService } from './configuracion.service';

@Injectable({
  providedIn: 'root'
})

export class ConsultaCitasService {

  citaEliminada = new EventEmitter<void>();
  private _cita:Cita[] = []

  constructor(private configuracionService:ConfiguracionService) { // Injectamos el servicio 
    
    this._cita = [
    //citas de ejemplo, estas las carque en para que esten precargadas ya uqe no si exite una amenos queda la embarrada.
    //new Cita ("El auténtico conocimiento es conocer la extensión de la propia ignorancia.","Confucio",1),
    //new Cita ("La única manera de hacer un gran trabajo es amar lo que haces.","Steve Jobs",2),
    ]
    this.cargarCitas();
  }

  async cargarCitas() {
    this._cita = await this.configuracionService.getListaCitas() || [];
  }
  // metodo para almacenar citas
  async guardarCitas() {
    await this.configuracionService.setListaCitas(this._cita);
  }
  // metodo para retornar un cita de manera aleatorea usado por el componente cita-random
  async getCitaRandom(): Promise<Cita> {
  
    const listaCitas = await this.configuracionService.getListaCitas() || [];   // cargamos las citas
    const random = Math.floor(Math.random() * listaCitas.length);// guardamos en random uno de los elemntos de la lista 
    return listaCitas[random];// retornamos solo un elemento de lista al azar
  }

  async getListaCitas(): Promise<Cita[]> { // metodo para retornar todas las citas
    return await this.configuracionService.getListaCitas() || [];
  }

  async addCita(nuevaCita: Cita) {  // metodo para añadir una cita obteniendo el ultimo ID ingresado
    const ultimoId = this._cita.length ? this._cita[this._cita.length - 1].id : 0;
    const nuevasCita = new Cita(nuevaCita.cita, nuevaCita.autor, ultimoId + 1);
    this._cita.push(nuevasCita);
    await this.guardarCitas();
  }

    eliminarCita(cita: Cita) {// metodo para eliminar una cita en base al Id cita
    const index = this._cita.findIndex(c => c.id === cita.id);
    if (index !== -1) {
      this._cita.splice(index, 1);
      this.guardarCitas();
      this.citaEliminada.emit();
    }
  }
}