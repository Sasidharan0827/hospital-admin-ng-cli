import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { Menus } from './types/base.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSidenavModule,MatListModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hospital-admin-ng-cli';

  menus = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 }));


  menuSelected:number = 0;
  


  constructor(private router:Router) {

  }


  onMenu(menu:number) {
    this.menuSelected = menu;
    this.router.navigateByUrl(`admin-user-list-page`)
  }

}
