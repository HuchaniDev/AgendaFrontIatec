import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Schedule } from "../models/schedule.interface";
import { ResponseInterface } from "../models/Response.Interface";

@Injectable({
  providedIn : 'root'
})
export  class ScheduleService {
  #http = inject(HttpClient);

  #endPoint="http://localhost:5050/schedules";

  getSchedule$(userId:number) {
    return this.#http.get<ResponseInterface<Schedule[]>>(`${this.#endPoint}/by-user/${userId}`);
  }
}