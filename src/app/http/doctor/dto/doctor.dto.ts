

export interface ConsultationsDto {
    id: number,
    doctorId: number,
    day: string,
    sessionType: string,
    startTime: string,
    endTime: string
}

export interface DoctorsDto {
    id:number,
    name:string,
    emailId:string,
    speciality: string ,
    consultations:ConsultationsDto[]
}
