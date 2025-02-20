import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ResponseInterface } from "../models/Response.Interface";
import { User } from "../models/User.interface";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class UserService {
    #http = inject(HttpClient);
  
    #endPoint="http://localhost:5050/iatec";

    getUsers$() {
      return this.#http.get<ResponseInterface<User[]>>(`${this.#endPoint}/all`);
    }

}