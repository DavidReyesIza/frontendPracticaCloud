import { Router } from '@angular/router';
import { transferencia } from './../models/transferencia';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit {

  saldo;
  loading = false;

  nombreCompleto:String;
  transferencias: transferencia[];



  constructor(public usuarioSrv: UsuarioService,
    private router: Router) {

   }

  ngOnInit(): void {
    this.getSaldo();
    this.getTransferencias();
  }

  getSaldo(){
    const data = {
      _id: this.usuarioSrv.usuario._id
    }
    this.usuarioSrv.getSaldo(data).subscribe((resp : any) =>{

      console.log('Respuesta saldo',resp)
      this.saldo = resp.saldo;
    })
  }

  cerrarSesion(){
    this.router.navigate(['']);
  }

  getTransferencias(){
    this.loading = true;

    const data = {

      _id: this.usuarioSrv.usuario._id

  }
    this.usuarioSrv.getTransferencias(data).subscribe((resp : any) =>{

      console.log(resp);
      this.transferencias = resp
    })
  }

}
