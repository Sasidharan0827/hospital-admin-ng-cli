import { Routes } from '@angular/router';
import { AdminUserListPageComponent } from './admin/admin-user-list-page/admin-user-list-page.component';
import { AdminUserAddPageComponent } from './admin/admin-user-add-page/admin-user-add-page.component';
import { AdminUserUpdatePageComponent } from './admin/admin-user-update-page/admin-user-update-page.component';
import { DoctorListPageComponent } from './doctor/doctor-list-page/doctor-list-page.component';
import { DoctorAddPageComponent } from './doctor/doctor-add-page/doctor-add-page.component';
import { DoctorUpdatePageComponent } from './doctor/doctor-update-page/doctor-update-page.component';
import { SubscriberListPageComponent } from './subscriber/subscriber-list-page/subscriber-list-page.component';
import { SubscriberAddPageComponent } from './subscriber/subscriber-add-page/subscriber-add-page.component';
import { SubscriberUpdatePageComponent } from './subscriber/subscriber-update-page/subscriber-update-page.component';
import { BookingListPageComponent } from './booking/booking-list-page/booking-list-page.component';
import { BookingAddPageComponent } from './booking/booking-add-page/booking-add-page.component';
import { BookingUpdatePageComponent } from './booking/booking-update-page/booking-update-page.component';

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
    },

    {
        path:'doctor-list-page',
        component:DoctorListPageComponent
    },
    {
        path:'doctor-add-page',
        component:DoctorAddPageComponent
    },
    {
        path:'doctor-update-page',
        component:DoctorUpdatePageComponent
    },

    {
        path:'subscriber-list-page',
        component:SubscriberListPageComponent
    },
    {
        path:'subscriber-add-page',
        component:SubscriberAddPageComponent
    },
    {
        path:'subscriber-update-page',
        component:SubscriberUpdatePageComponent
    },


    {
        path:'booking-list-page',
        component:BookingListPageComponent
    },
    {
        path:'booking-add-page',
        component:BookingAddPageComponent
    },
    {
        path:'booking-update-page',
        component:BookingUpdatePageComponent
    }
];
