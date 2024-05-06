import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {  
  url='http://localhost:3000/users';
constructor(private http: HttpClient){}

  getUsuarios():Observable<any>{  
    return this.http.get<Usuario>(this.url);
   // return this.listUsuarios.slice();  
   //return this.httpClient.get<Usuario[]>('http://localhost:3000/users');
  } 

  eliminarUsuario(index:number){ 
   // this.listUsuarios.splice(index, 1); 

  } 
  agregarUsuario(usuario: Usuario){ 
    //this.listUsuarios.unshift(usuario);
  }
}
