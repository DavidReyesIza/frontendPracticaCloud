import { usuario } from './models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { map } from 'rxjs/operators';
import { HandleError } from './common/handle-error';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  urlBase = environment.base_url;
  saldo;

  public usuario: usuario

  constructor(
    private http: HttpClient,
    private handleError: HandleError
  ) { }

    get headers(){

    return{
      headers:{
        'Ocp-Apim-Subscription-Key': '3216f271f2ab4221bd4d7dd8569184c2',
        'Ocp-Apim-Trace':'true'
      }

    }
  }


  getUsuario(form){
    return this.http.post(this.urlBase+'/getAccount' ,form,this.headers).pipe(
      map((resp: usuario) => {
       const UsuarioHttp = new usuario(resp.nombre_completo,resp.rol,resp._id,resp._no_id_usuario);

       this.usuario = UsuarioHttp;

       return {
        UsuarioHttp
       }
      })
    );
  }

  getSaldo(data){
   return this.http.post(this.urlBase+'/getSaldo',data,this.headers);
  }

  getTransferencias(data){
    return this.http.post(this.urlBase+'/getTransferenciasById', data,this.headers);
  }

  transferir(data){
    return this.http.post(this.urlBase+'/Transferir',data,this.headers).pipe(
      catchError(this.handleError.handleError<any>('getTransferir'));

  }

  getAllAccounts(){
    return this.http.get(this.urlBase+'/getAllAccounts',this.headers);
  }

  getAllTransferencias(){
    return this.http.get(this.urlBase+'/getAllRecords',this.headers);
  }



}
