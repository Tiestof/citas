import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'
import { Cita } from '../Modelo/cita';
import { ConsultaCitasService } from '../consulta-citas.service';

@Component({
  selector: 'app-cita-random',
  templateUrl: './cita-random.component.html',
  styleUrls: ['./cita-random.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})

export class CitaRandomComponent  implements OnInit {

 cita: Cita | undefined;

  constructor(private consultaCitasService:ConsultaCitasService) {
   
  }
  
  ngOnInit() {

    this.cita = this.consultaCitasService.getCitaRandom()

  }

}
