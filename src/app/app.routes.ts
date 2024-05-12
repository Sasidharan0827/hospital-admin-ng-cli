import { Routes } from '@angular/router';
import { AdminUserListPageComponent } from './admin/admin-user-list-page/admin-user-list-page.component';
import { AdminUserAddPageComponent } from './admin/admin-user-add-page/admin-user-add-page.component';
import { AdminUserUpdatePageComponent } from './admin/admin-user-update-page/admin-user-update-page.component';

export const routes: Routes = [
    {
        path:'admin-user-list-page',
        component:AdminUserListPageComponent
    },
    {
        path:'admin-user-add-page',
        component:AdminUserAddPageComponent
    },
    {
        path:'admin-user-update-page',
        component:AdminUserUpdatePageComponent
    }
];
