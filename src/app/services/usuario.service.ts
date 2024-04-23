import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService { 
  listUsuarios: Usuario[] = [
    {usuario: "santiA", nombre:"Santiago", apellido:"Alonso", sexo:"Masculino"}, 
    {usuario: "juanP", nombre:"Juan", apellido:"Perez", sexo:"Masculino"}, 
    {usuario: "daniG", nombre:"Daniela", apellido:"Gonzalez", sexo:"Femenino"}, 
    {usuario: "martaD", nombre:"Marta", apellido:"Diaz", sexo:"Femenino"}, 
    {usuario: "albertoR", nombre:"Alberto", apellido:"Rodriguez", sexo:"Masculino"},
  
  ];

  constructor() { } 
  getUsuario(){ 
    return this.listUsuarios.slice();
  } 

  eliminarUsuario(index:number){ 
    this.listUsuarios.splice(index, 1); 

  } 
  agregarUsuario(usuario: Usuario){ 
    this.listUsuarios.unshift(usuario);
  }
}
