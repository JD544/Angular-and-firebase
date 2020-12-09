import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'

import { TemplateComponent } from './template/template.component'

import { LoginComponent } from './login/login.component'

import { DocumentationComponent } from './documentation/documentation.component'

import { FeaturesComponent } from './features/features.component'

import { DatabaseComponent } from './documentation/firestore/database/database.component'

import { AuthenticationComponent } from './documentation/authentication/authentication/authentication.component'

import { AuthComponent } from './login/auth/authentication/authentication.component'

import { HostingComponent } from './documentation/hosting/hosting/hosting.component'

const routes: Routes = [
  { path: '', component: TemplateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'docs', component: DocumentationComponent },
  { path: 'docs/database', component: DatabaseComponent },
  { path: 'docs/authentication', component: AuthenticationComponent },
  { path: 'docs/hosting', component: HostingComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
