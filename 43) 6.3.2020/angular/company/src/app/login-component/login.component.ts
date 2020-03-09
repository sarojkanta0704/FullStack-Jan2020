import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  //declare properties
  loginForm: FormGroup;

  constructor()
  {
    this.loginForm = new FormGroup({
      username: new FormControl(null, 
        [ Validators.required ]),
      password: new FormControl(null, 
          [ Validators.required ]),
    });
  }

  ngOnInit(): void
  {
    //loading data from database
  }
}

