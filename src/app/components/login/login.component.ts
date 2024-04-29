import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{ 
form: FormGroup;  
loading= false;
constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router: Router){
  this.form = this.fb.group({
    usuario:['', Validators.required], 
    password:['',Validators.required]
  })
} 
iniciarSesion(){ 
 
  const usuario = this.form.value.usuario; 
  const password = this.form.value.password; 

  console.log(usuario); 
  console.log(password); 
if(usuario == 'admin' && password == 'admin123'){  
  this.fakeLoading(); 

} 
else{ 
  this.error(); 
  this.form.reset();
}

} 
error(){ 
  this._snackBar.open( 'Usuario o Contraseña Invalida', '', { 
    duration: 5000, 
    horizontalPosition: 'center', 
    verticalPosition: 'bottom',
  })
}
fakeLoading(){ 
  this.loading=true;  
  setTimeout(() =>{  


    this.router.navigate(['dashboard/usuarios']);

  },1500); 
}

}
  
  

