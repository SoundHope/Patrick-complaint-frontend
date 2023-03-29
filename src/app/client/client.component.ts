import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  title = 'Patrick-complaint-frontend';
  btnloadingDni=false;
  findUserSucess = false;
  findUserSucessMessage = "";
  findUserNotSuces = false;

  constructor(private clientService:ClientService){
  }
  

  onClickSubmitDniForm(data: any){
    this.btnloadingDni = !this.btnloadingDni;
    this.clientService.getClientByDni(data.dni).subscribe((resp: any)=>{
      //sucess
      console.log(resp)
      this.clientService.response_data = resp;
      this.findUserSucess = true;
      window.location.href = "complaint-component?name="+resp.name +"&last_name="+resp.last_name;
    }, error => {
      //not found by Dni
      this.btnloadingDni = !this.btnloadingDni;
      this.findUserNotSuces = true;
    });
    
  }

}
