import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'
import { Cita } from '../Modelo/cita';
import { ConsultaCitasService } from '../consulta-citas.service';
import { ConfiguracionService } from '../configuracion.service';
 import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-cita-random',
  templateUrl: './cita-random.component.html',
  styleUrls: ['./cita-random.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})

export class CitaRandomComponent  implements OnInit, OnDestroy {

  cita: Cita = {cita: "",autor: "",id: 0}
  eliminar: boolean = false;
  citaEliminadaSubscription: Subscription = new Subscription;

  constructor(
    //injectamos los seriviocs en el componeente para usarlos 
    private consultaCitasService:ConsultaCitasService,
    private configurationService:ConfiguracionService 
    ) { }

    ngOnInit() {
      // cargamos la cita para mostrar 
      this.cargarCita();
      this.citaEliminadaSubscription = this.consultaCitasService.citaEliminada.subscribe(() => {
        this.cargarCita();
      })
    }

    ngOnDestroy() {
        this.citaEliminadaSubscription.unsubscribe();
    }
  
    async cargarCita() {
      // traemos la citarandom usando getCitaRandom() y la convertimos de promise a tipo Cita
      this.consultaCitasService.getCitaRandom().then(cita => {
        this.cita = cita;
        this.configurationService.eliminarInicio().then(eliminar => {
          this.eliminar = eliminar;
        });
      });
    }

  onClick() {
    // despues de validar si la la opcion de configuracion esta 
    //habilitada se podra eliminar la cita
    this.consultaCitasService.eliminarCita(this.cita)

    
  }
}
