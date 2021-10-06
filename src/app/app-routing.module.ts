import { TransferenciasAdminComponent } from './transferencias-admin/transferencias-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { UsuarioService } from './usuario.service';

import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferenciaComponent } from './transferencia/transferencia.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: VistaUsuarioComponent},
  {path: 'transferencias', component: TransferenciaComponent},
  {path: 'dashboardAdmin', component: DashboardAdminComponent},
  {path: 'transferenciasAdmin/:id', component: TransferenciasAdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private usuarioSrv: UsuarioService){

    const usuario = localStorage.getItem('usuario');
    const usuarioObj = JSON.parse(usuario);

    this.usuarioSrv.usuario = usuarioObj;





  }
}
