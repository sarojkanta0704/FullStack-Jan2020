import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from '../models/login';

@Injectable({ providedIn: "root" })
export class UsersService
{
  isLoggedIn: boolean = false;

  constructor(private httpClient: HttpClient )
  {
  }

  getUsersByUserNameAndPassword(uname: string, pwd: string)
  {
    return this.httpClient.post<Login[]>("/login",  { username: uname, password: pwd });
  }
}

