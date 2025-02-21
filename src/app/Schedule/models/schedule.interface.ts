import { Person } from "./Person.interface";

export interface Schedule {
  id:number,
  eventName:string,
  description:string,
  date:Date,
  location:string,
  selected:boolean|false,
  participants:Person[]
}