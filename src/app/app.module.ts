import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { TransferenciasAdminComponent } from './transferencias-admin/transferencias-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaUsuarioComponent,
    LoginComponent,
    TransferenciaComponent,
    DashboardAdminComponent,
    TransferenciasAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
