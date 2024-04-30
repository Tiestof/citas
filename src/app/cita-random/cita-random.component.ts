import { Component, OnInit, OnDestroy } from '@angular/core';// llegue esta solucion con ayuda de IA
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'
import { Cita } from '../Modelo/cita';
import { ConsultaCitasService } from '../consulta-citas.service';
import { ConfiguracionService } from '../configuracion.service';
import { Subscription } from 'rxjs'; // llegue esta solucion con ayuda de IA

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

    ) {
      // invocamos al servicio/metodo que no retorna una Cita al azar desde las lista de citas.
      //this.cita = this.consultaCitasService.getCitaRandom()
    }

    ngOnInit() {
      this.cargarCita();
      this.citaEliminadaSubscription = this.consultaCitasService.citaEliminada.subscribe(() => {
        this.cargarCita();
      })
    }

    ngOnDestroy() {
      this.citaEliminadaSubscription.unsubscribe();
    }
  
    async cargarCita() {
      this.consultaCitasService.getCitaRandom().then(cita => {
        this.cita = cita;
        this.configurationService.eliminarInicio().then(eliminar => {
          this.eliminar = eliminar;
        });
      });
    }

  onClick() {
  
    this.consultaCitasService.eliminarCita(this.cita)

    
  }
}
