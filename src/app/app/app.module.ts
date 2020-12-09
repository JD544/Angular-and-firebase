import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/auth.guard'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { environment } from '../environments/environment'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { TemplateComponent } from './template/template.component';
import { FeaturesComponent } from './features/features.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DatabaseComponent } from './documentation/firestore/database/database.component';
import { HostingComponent } from './documentation/hosting/hosting/hosting.component';
import { AuthenticationComponent } from './documentation/authentication/authentication/authentication.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AuthComponent } from './login/auth/authentication/authentication.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TemplateComponent,
    FeaturesComponent,
    DocumentationComponent,
    DatabaseComponent,
    HostingComponent,
    AuthenticationComponent,
    DropdownComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase, 'AngularFire5')
  ],
  exports: [
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
