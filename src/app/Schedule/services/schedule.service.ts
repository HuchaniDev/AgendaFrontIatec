import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Schedule } from "../models/schedule.interface";
import { ResponseInterface } from "../models/Response.Interface";
import { catchError, throwError } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export  class ScheduleService {
  #http = inject(HttpClient);

  #endPoint="http://localhost:5050/schedules";

  getSchedule$(userId:number) {
    return this.#http.get<ResponseInterface<Schedule[]>>(`${this.#endPoint}/by-user/${userId}`)
    .pipe(
      catchError(this.#handleError)
    );
  }

  #handleError(error: HttpErrorResponse) {
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			errorMessage = `Error fontend: ${error.error.message}`;      
		} else {
			errorMessage = `Error backend Code: ${error.status}\nMessage: ${JSON.stringify(error.error)}`;
    }
    console.log(errorMessage);
		return throwError(()=> error);
	}
}