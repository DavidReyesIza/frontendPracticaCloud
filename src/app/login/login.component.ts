import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private usuarioSrv: UsuarioService,
    private router: Router,) {

       this.form = this.fb.group({
         id: ['',[Validators.required]],
         password: ['', [Validators.required]],


       });
   }


  ngOnInit(): void {
  }

  login(){

    this.usuarioSrv.getUsuario(this.form.value).subscribe(


      (resp: any) => {
        console.log("respuest",resp)
      if(resp.status = 200){


        localStorage.setItem('usuario',JSON.stringify(this.usuarioSrv.usuario));


          //localStorage.removeItem('email');

        if(this.usuarioSrv.usuario.rol == "user"){
          this.router.navigate(['dashboard']);
        }else if(this.usuarioSrv.usuario.rol == "admin"){
          this.router.navigate(['dashboardAdmin']);
        }



        swal.fire('Inicio de sesion!',
        `Bienvenido ${this.usuarioSrv.usuario.nombre_completo}`,
        'success')

        setTimeout(() => {
          this.router.navigate(['']);
           swal.fire('Se acabo el tiempo!',
        `Solo puedes estar logeado por 2 minutos`,
        'error')

        }, 120000);
      }
      },

      err => {

        swal.fire('Error',
        `Usuario o contraseña Incorrectos`,
        'error')
      }


    );
  }

}
