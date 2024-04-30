import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { __values } from 'tslib';
import { Cita } from './Modelo/cita';


@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private readonly KEY_ELIMINAR = "ELIMINAR"
  private readonly KEY_LISTA_CITAS = "LISTA_CITAS";

  constructor() { }

  async eliminarInicio(): Promise<boolean> {
    const resultado = await Preferences.get ({key: this.KEY_ELIMINAR}) 
    return resultado?.value == "true" ?? false

  }

  async setEliminarInicio(eliminarInicio:boolean):Promise<void> {
      await Preferences.set({
        key: this.KEY_ELIMINAR,
        value: eliminarInicio ? "true": "false"
    })

  }
  async getListaCitas(): Promise<Cita[]> {
    const resultado = await Preferences.get({key: this.KEY_LISTA_CITAS});
    return resultado?.value ? JSON.parse(resultado.value) : null;
  }

  async setListaCitas(listaCitas: Cita[]): Promise<void> {
    await Preferences.set({
      key: this.KEY_LISTA_CITAS,
      value: JSON.stringify(listaCitas)
    });
  }

}
