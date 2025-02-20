import { Component, inject } from "@angular/core";
import { ScheduleService } from "../../services/schedule.service";
import { ResponseInterface } from "../../models/Response.Interface";
import { Schedule } from "../../models/schedule.interface";
import { log } from "console";
import { FormsModule } from "@angular/forms";
import { User } from "../../models/User.interface";

@Component({
  selector: "app-schedule",
  standalone: true,
  templateUrl: "./index.component.html",
  imports: [
    FormsModule
  ]
})
export default class ScheduleComponent {
  #scheduleService = inject(ScheduleService);
  title = "Schedule";

  users:User[]=[
    {
      id:0,
      name:"daniel",
      lastName:"huchani Huaranca"
    },
    {
      id:1,
      name:"daniel2",
      lastName:"huchani Huaranca"
    },
    {
      id:2,
      name:"daniel3",
      lastName:"huchani Huaranca"
    }

  ]

  user:User = {
    id:0,
    name:"daniel",
    lastName:"huchani Huaranca"
  }

  userId = 1;
  schdules:Schedule[] = [];

  constructor() {
    //this.getSchedule();
  }
  
  getSchedule() {
    this.#scheduleService.getSchedule$(this.userId).subscribe({
      next: (response:ResponseInterface<Schedule[]>) => {
        console.log(response);        
        if(response.isSuccess) {
          this.schdules = response.data;
        }
      },
      error: (error) => {
        console.log("error",error);
        this.schdules = [];
      }
    });
  }

  
}