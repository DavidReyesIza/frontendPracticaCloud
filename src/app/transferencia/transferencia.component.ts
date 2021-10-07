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



       });
   }

  ngOnInit(): void {
  }

  transferir(){

    this.usuarioSrv.transferir(this.form.value).subscribe(


      (resp: any) => {

        console.log("respuesta resp",resp)



        this.router.navigate(['dashboard']);
        swal.fire('Transferencia!',
        `Transferencia realizada con exito`,
        'success')



      },

      err => {

        if(err.status == 200){

        this.router.navigate(['dashboard']);
        swal.fire('Transferencia!',
        `Transferencia realizada con exito`,
        'success')
        return
        }
        console.log("mensaje de error",err)

        console.log("respuesta resp",err.error.respuesta)
        swal.fire('Error',
        `Error en la transacción : ${err.error.respuesta}`,
        'error')
      }


    );
  }

}
