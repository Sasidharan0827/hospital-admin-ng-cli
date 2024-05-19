import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DoctorsDto } from './dto/doctor.dto';

@Injectable({
  providedIn: 'root'
})
export class DoctorHttpService {

  private doctorData:BehaviorSubject<DoctorsDto[]> = new BehaviorSubject<DoctorsDto[]>([]);
  private doctorData$:Observable<DoctorsDto[]> = this.doctorData.asObservable()

  constructor(private httpClient:HttpClient) { 

  }

  public sendDoctorData(data:DoctorsDto[]) {
    this.doctorData.next(data);

  }

  public getDoctorData() {
    return this.doctorData$;
  }

  public searchDoctor(searchText:string) {

    let url = `http://localhost:3000/doctors`
    if(searchText && searchText.length > 0 )  {
      url += `?searchText=${searchText}`
    } 
    
    
    this.httpClient.get<DoctorsDto[]>(url).subscribe( apiResponseData => {
      this.sendDoctorData(apiResponseData);
    })
  }


}
