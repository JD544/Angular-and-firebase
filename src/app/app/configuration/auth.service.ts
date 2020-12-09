import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { auth } from 'firebase';
import { Observable, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators'
import { Router } from '@angular/router';
 
var Email = ''
var user$ = false

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: boolean = false;
  displayName: string = '';
  data: string = '';
  ref = ''
  UID: string = ''
  email: string = ''

  constructor(
   private firebase: AngularFireAuth,
   private firestore: AngularFirestore,
   private afs: AngularFirestore,
   private router: Router,
  ) {
    const server = this
    this.OnAuth()
  }

  async GetData(param) {
    const server = this
  await this.firestore.collection('users').ref.where("email", "==", param).onSnapshot(data => {
   data.forEach(doc => {
        server.data = doc.data().status
      })
    })
  }

  async SetStatus() {

  }

  updateOnDisconnect() {
    
  }

  async GetUser() {
    return this.firebase.authState.pipe(first()).toPromise();
  }

 async OnAuth () {
   const user = await this.GetUser()

   const server = this
   if (user) {
    user$ = true
    server.user$ = user$
    server.UID = user.uid
    Email = user.email
    server.displayName = user.displayName ? (user.displayName) : ("")
    server.email = Email
      } else {
    server.user$ = false
    
    server.UID = ''
    Email = ''
    server.displayName = ''
    user$ = false
    server.user$ = false
    server.email = ''
  }
 }

  async GoogleSignin() {
    var provider = new auth.GoogleAuthProvider()

   await this.firebase.signInWithRedirect(provider).then(function(data){
      
    }).catch(err => {
      console.log(err)
    })
  }

  GetAuth(){
    setTimeout(()=>{
    if (user$) {
      
    }
  },900)
  }
 Logout() {
    this.firebase.signOut().then(function(res) {

    }).catch(err => {
      console.log(err)
    })
  }
}
