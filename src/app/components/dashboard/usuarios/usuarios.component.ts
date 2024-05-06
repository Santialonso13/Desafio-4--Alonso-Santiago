import { Component, ViewChild } from '@angular/core';  
import { Usuario } from '../../../interfaces/usuario';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from '../../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
 listUsuarios: Usuario[] = [];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones']; 
  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort;
    
  }

  dataSource!: MatTableDataSource<any>;  
  constructor(private _usuarioService: UsuarioService,  private _snackBar: MatSnackBar){}   
  ngOnInit(): void{ 
   this.cargarUsuarios (); 
  }

  cargarUsuarios(){  
    this._usuarioService.getUsuarios().subscribe(data => { 
      console.log(data);  
      this.listUsuarios = data; 
      
    })
    
   // this.listUsuarios = this._usuarioService.getUsuario(); 
    this.dataSource = new MatTableDataSource(this.listUsuarios)
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 

  eliminarUsuario(index: number){ 
    console.log(index); 

    this._usuarioService.eliminarUsuario(index);  
    this.cargarUsuarios();  
    this._snackBar.open( 'El usuario fue eliminado con exito', '', { 
      duration: 1500, 
      horizontalPosition: 'center', 
      verticalPosition: 'bottom',
    })

  }
}
