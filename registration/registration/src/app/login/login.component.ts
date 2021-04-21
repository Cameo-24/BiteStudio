import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Console } from 'node:console';
import { RegistrationService } from '../registration.service';
import {User} from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user =new User();

  constructor(private _service: RegistrationService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data -> Console.log("response recieved"),
      error -> Console.log("exception ocurred")
    )

  }

}
