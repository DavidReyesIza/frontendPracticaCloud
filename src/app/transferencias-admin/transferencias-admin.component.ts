import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencias-admin',
  templateUrl: './transferencias-admin.component.html',
  styleUrls: ['./transferencias-admin.component.css']
})
export class TransferenciasAdminComponent implements OnInit {

  transferencias
  constructor(public usuarioSrv : UsuarioService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar() : void {
    this.activatedRoute.params.subscribe(params => {

      let id = params['id'];

      if(id){
        const data = {
          _id: id
      }
      this.getTransferencias(data)
      }


    })
  }

  getTransferencias(data){


    this.usuarioSrv.getTransferencias(data).subscribe((resp : any) =>{

      console.log(resp);
      this.transferencias = resp
    })
  }

}
