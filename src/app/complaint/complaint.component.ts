import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/model/complaint';
import { ClientService } from '../services/client.service';
import { ComplaintService } from '../services/complaint.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {
  complaints: any[] = [];
  complaint: Complaint = {
    id: 0,
    type: "",
    detail: ""
  };
  types: any[] = [];
  name: string = "";
  lastName: string = "";


  constructor(private complaintService: ComplaintService, private clientService: ClientService, private route: ActivatedRoute) {
    this.complaints = []
    this.types = [{ name: '--Seleccionar--' }, { name: 'Tarjetas de Crédito', value: "Tarjetas de Crédito" }, { name: 'Transferencias', value: 'Transferencias' }, { name: 'Pago de Servicios', value: 'Pago de Servicios' }];
  }


  getAll() {
    this.complaintService.getAll().subscribe(
      (result: any) => {
        for (let i = 0; i < result.length; i++) {
          let complaint = result[i] as Complaint;
          this.complaints.push(complaint);
        }
      },
      error => {
      }
    )
  }
  save() {
    this.complaintService.save(this.complaint).subscribe(
      (result: any) => {

      },
      error => {
        console.log(error);
      }
    )
  }

  onClickSubmit(data: any) {
    console.log(data)
    try {
      data['type'] = data['type']['name']
      this.complaintService.save(data).subscribe((resp: any) => {
        Swal.fire({ title: 'Solicitud Enviada!', showDenyButton: true, denyButtonText: 'Salir', icon: 'success', confirmButtonText: 'Registrar Otra' }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "complaint-component?name=" + this.name + "&last_name=" + this.lastName;
          } else {
            window.location.href = "main";
          }
        }, error => {
          //not found by Dni
          Swal.fire({ title: 'Ocurrio un error!', text: 'Por favor vuelve a intentarlo', showDenyButton: true, icon: 'warning', confirmButtonText: 'Salir', denyButtonText: 'Reintentar' }).then((result) => {
            if (!result.isConfirmed) {
              window.location.href = "complaint-component?name=" + this.name + "&last_name=" + this.lastName;
            }else {
              window.location.href = "main";
            }
          })
        })
      });
    }
    catch {
      Swal.fire({ title: 'Ocurrio un error!', text: 'Recuerda seleccionar un tipo de incidencia. Por favor vuelve a intentarlo', showDenyButton: true, icon: 'warning',  confirmButtonText: 'Salir', denyButtonText: 'Reintentar' }).then((result) => {
        if (!result.isConfirmed) {
          window.location.href = "complaint-component?name=" + this.name + "&last_name=" + this.lastName;
        }else {
          window.location.href = "main";
        }
      })
    }

  };

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.name = params['name'];
        this.lastName = params['last_name'];
      })
  }
}
