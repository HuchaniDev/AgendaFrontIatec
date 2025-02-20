import { Component, inject } from "@angular/core";
import { ScheduleService } from "../../services/schedule.service";
import { ResponseInterface } from "../../models/Response.Interface";
import { Schedule } from "../../models/schedule.interface";
import { log } from "console";

@Component({
  selector: "app-schedule",
  standalone: true,
  templateUrl: "./index.component.html",
})
export default class ScheduleComponent {
  #scheduleService = inject(ScheduleService);
  title = "Schedule";

  userId = 1;
  schdules:Schedule[] = [];

  constructor() {
    this.getSchedule();
  }
  
  getSchedule() {
    this.#scheduleService.getSchedule$(this.userId).subscribe({
      next: (response:ResponseInterface<Schedule[]>) => {
        console.log(response);        
        if(response.isSuccess) {
          this.schdules = response.data;
        }
        else {
          console.log(response.message);
        }
      },
    });
  }

  
}