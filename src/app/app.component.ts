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


}
