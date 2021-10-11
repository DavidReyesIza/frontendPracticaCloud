import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public saldo

  constructor(public usuarioSrv: UsuarioService) { }

  ngOnInit(): void {
    this.getSaldo();
  }

  getSaldo(){
    const data = {
      _id: this.usuarioSrv.usuario._id
    }
    this.usuarioSrv.getSaldo(data).subscribe((resp : any) =>{


      this.saldo = resp.saldo;
    })
  }

}
