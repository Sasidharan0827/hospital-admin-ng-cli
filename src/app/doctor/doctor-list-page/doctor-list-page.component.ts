import { Component, OnDestroy, OnInit } from '@angular/core';
import { DoctorHttpService } from '../../http/doctor/doctor.http.service';
import { DoctorsDto } from '../../http/doctor/dto/doctor.dto';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-list-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-list-page.component.html',
  styleUrl: './doctor-list-page.component.scss'
})
export class DoctorListPageComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  searchText:string = '';
  doctors:DoctorsDto[] = [];


  constructor(private doctorService:DoctorHttpService) {

  }

  ngOnInit(): void {

    this.doctorService.getDoctorData().pipe(takeUntil(this.unsubscribe$)).subscribe( inputData => {
      this.doctors = inputData
    })

    this.doctorService.searchDoctor(this.searchText);

      console.log('ngOnInit ')
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.log('ngOnDestroy ')

  }


  onSearchTextChange() {
    this.doctorService.searchDoctor(this.searchText);
  }



}
