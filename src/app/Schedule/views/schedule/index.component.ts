import { Component, inject } from "@angular/core";
import { ScheduleService } from "../../services/schedule.service";
import { ResponseInterface } from "../../models/Response.Interface";
import { Schedule } from "../../models/schedule.interface";
import { log } from "console";
import { FormsModule } from "@angular/forms";
import { User } from "../../models/User.interface";
import { UserService } from "../../services/user.service";
import { Person } from "../../models/Person.interface";
import { CommonModule, NgClass } from "@angular/common";

@Component({
  selector: "app-schedule",
  standalone: true,
  templateUrl: "./index.component.html",
  imports: [
    FormsModule,
    CommonModule,
  ]
})
export default class ScheduleComponent {
  #scheduleService = inject(ScheduleService);
  #userService = inject(UserService);
  title = "Schedule";

  users:User[]=[];
  userId = 0;
  selectedEventId = 0;  
  schdules:Schedule[] = [];
  participants:Person[] = [];

  constructor() {
    //this.getSchedule();
    this.getUsers();
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

  getUsers(){
    this.#userService.getUsers$().subscribe({
      next: (response:ResponseInterface<User[]>) => {
        console.log(response);        
        this.users = response.data;
        if(response.data.length > 0){
          this.userId = response.data[0].id;
          this.getSchedule();
        }
      },
      error: (error) => {
        console.log("error",error);
        this.users = [];
      }
    });
  }

  showParticipants(schedule:Schedule){
    this.participants = schedule.participants;
    this.selectedEventId= schedule.id; 
  }

  
}