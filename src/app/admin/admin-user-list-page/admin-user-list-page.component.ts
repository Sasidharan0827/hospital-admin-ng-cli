import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-user-list-page',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './admin-user-list-page.component.html',
  styleUrl: './admin-user-list-page.component.scss'
})
export class AdminUserListPageComponent {

  users = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 }));


  constructor(private router:Router) {}

  onAddAdminUser() {
    this.router.navigateByUrl(`admin-user-add-page`);
  }

  onEditAdminUser(userId:number) {

    let url = `admin-user-update-page?userId=${userId}`;
    this.router.navigateByUrl(url);
  }

}
