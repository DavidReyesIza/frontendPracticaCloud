import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  usuarios

  constructor(public usuarioSrv: UsuarioService) { }

  ngOnInit(): void {
    this.getAllAccounts();
  }

  getAllAccounts(){
    this.usuarioSrv.getAllAccounts().subscribe(resp => {
      this.usuarios = resp;
    })
  }

}
