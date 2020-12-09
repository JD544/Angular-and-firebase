import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  line = `import gmad from 'gmad`

  line2 = `constructer(
    private Authentication: gmad`

  line3 = `// Logging users in!
  Login() {
    this.Authentication.GMAD().loginWithEmailAndPassword("username12@gmail.com", "password").then(user => {
      if (user) {
        alert(user.email)
      } else {

      }
    })
  } `

  line4 = `// getting a status
  onAuthStateChange() {
    this.Authentication.GMAD().GetUser().then(user => {
      if(user) {
      // A user is already logged in.
      } else {
        //returns null
      }
    }).catch(() => {

    })
  }`

  line5 = `// Delete a user
  deleteUser() {
    // Must be admin of the database and signed in
    this.Authentication.GMAD().deleteUser("user@gmail.com").then(() => {
      // User Deleted
    })
  }`

  line6 = `// configuration for your database
  // Remember to put this in environments/environment
  const config = {
    Key: "YOUR_KEY",
    Token: "YOUR_TOKEN"
  }
  
  // Connect to your DB
  
  // in your root 

  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment'
import { gmad } from 'gmad'
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    gmad.initializeApp(environment.config, 'AngularFire5')
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  // Congrats your database is connected to your app 
  `
  constructor() { }

  ngOnInit(): void {
  }

}
