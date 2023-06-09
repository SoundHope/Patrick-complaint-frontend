import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Patrick-complaint-frontend';
  btnloadingDni=false;
  findUserSucess = false;
  findUserSucessMessage = "";
  findUserNotSuces = false;

  constructor(private clientService:ClientService){
  }
  

  onClickSubmitDniForm(data: any){
    this.btnloadingDni = !this.btnloadingDni;
    console.log(data.dni);
    this.clientService.getClientByDni(data.dni).subscribe((resp: any)=>{
      //sucess
      this.findUserSucess = true;
      window.location.href = "complaint-component";
    }, error => {
      //not found by Dni
      this.btnloadingDni = !this.btnloadingDni;
      this.findUserNotSuces = true;
    });
    
  }


}
