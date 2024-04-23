import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Menu } from '../../../interfaces/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {  
  menu: Menu[]= [];
  constructor(private _menuService: MenuService){} 

  ngOnInit():void{ 
    this.cargarMenu();
  }
  cargarMenu(){ 
    this._menuService.getMenu().subscribe(data => { 
      this.menu = data;
    })
  }

}
