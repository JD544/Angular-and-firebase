import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../../../configuration/auth.service'

import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthComponent implements OnInit {

  email = ''
  password = ''
  authStatus = ''
  UID = ''
  Name = ''
  IsUser = false

  constructor(
    public authServer: AuthService,
    private firebase: AngularFireAuth,
    private firestore: AngularFirestore,
    private Router: Router
  ) { 
    setTimeout(()=>{
    if (this.authServer.user$) {
      this.Router.navigate(["/"])
    }
  },900)
  }

  ngOnInit(): void {
  }

}
