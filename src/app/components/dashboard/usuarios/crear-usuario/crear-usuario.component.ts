import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../../interfaces/usuario';
import { UsuarioService } from '../../../../services/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.scss'
})
export class CrearUsuarioComponent {  
sexo: any = ['Masculino' , 'Femenino'] 
form: FormGroup; 
constructor(private fb: FormBuilder, private _usuarioService:UsuarioService, 
  private router: Router, 
  private _snackBar: MatSnackBar){ 
  this.form = this.fb.group({ 
    usuario: ['', Validators.required], 
    nombre: ['', Validators.required], 
    apellido: ['', Validators.required], 
    sexo: ['', Validators.required],
  })
}
  
agregarUsuario(){ 
 

  const user: Usuario = {  
    usuario: this.form.value.usuario,
    nombre: this.form.value.nombre, 
    apellido:this.form.value.apellido, 
    sexo: this.form.value.sexo,
 }   
 
 this._usuarioService.agregarUsuario(user); 
 this.router.navigate(['/dashboard/usuarios'])   
 this._snackBar.open( 'El usuario fue creado con exito!', '', { 
  duration: 1500, 
  horizontalPosition: 'center', 
  verticalPosition: 'bottom',
})

  
} 

}
