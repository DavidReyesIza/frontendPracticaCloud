import { transferencia } from './../models/transferencia';
import { UsuarioService } from './../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private usuarioSrv: UsuarioService,
    private router: Router,) {

       this.form = this.fb.group({
         monto_transferido: ['',[Validators.required]],
         cuenta_destino: ['', [Validators.required]],
         cuenta_origen: [usuarioSrv.usuario._id],
         tipoCredito: ['', [Validators.required]],


       });
   }

  ngOnInit(): void {
  }

  transferir(){

    this.usuarioSrv.transferir(this.form.value).subscribe(


      (resp: any) => {
        console.log("respuesta transferir",resp)
      

        //localStorage.setItem('usuario',JSON.stringify(this.usuarioSrv.usuario));
          //localStorage.removeItem('email');

        this.router.navigate(['dashboard']);
        swal.fire('Transferencia!',
        `Transferencia realizada con exito`,
        'success')
      
      },
/*
      err => {
        console.log('errorrr',err)
        this.router.navigate(['dashboard']);

        swal.fire('Error',
        `error en la transferencia`,
        'error')
      }
*/

  (err: any) => {
   
        //localStorage.setItem('usuario',JSON.stringify(this.usuarioSrv.usuario));
          //localStorage.removeItem('email');

        this.router.navigate(['dashboard']);
        swal.fire('Transferencia!',
        `Transferencia realizada con exito`,
        'success')
      
      },

    );
  }

}
