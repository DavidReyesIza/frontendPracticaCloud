import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencias-admin',
  templateUrl: './transferencias-admin.component.html',
  styleUrls: ['./transferencias-admin.component.css']
})
export class TransferenciasAdminComponent implements OnInit {

 public idCuentaUsuario;
 loading = false;

 usuario

  transferencias
  constructor(public usuarioSrv : UsuarioService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
    this.getUsuario();
  }

  cargar() : void {
    this.activatedRoute.params.subscribe(params => {

      let id = params['id'];
      this.idCuentaUsuario = id;

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
      this.loading = true;
    })
  }

  getUsuario(){
     const data = {
      id: this.idCuentaUsuario,
      rol: 'admin'
    }
    this.usuarioSrv.getUsuarioAdminPanel(data).subscribe((resp : any) => {

      this.usuario = resp.nombre_completo;
    })
  }

}
