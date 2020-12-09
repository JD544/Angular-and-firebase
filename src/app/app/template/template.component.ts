import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../configuration/database/database.service'
import { AuthService } from '../configuration/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {
  constructor(
    private data: FormBuilder,
    private Database: DatabaseService,
    public authServer: AuthService,
    private Router: Router
  ) {
    setTimeout(()=>{
      if (!this.authServer.user$) {
        this.Router.navigate(["/auth"])
      }
    },900)
  }

  
  Form: FormGroup
  Name = ''
  Company = ''
  Email = ''
  
  onSubmit() {
    if (this.Name && this.Company && this.Email != "") {
    this.Database.GMAD().Add("Angular", {
      Name: this.Name,
      Company: this.Company,
      Email: this.Email
    }).then(() => {

    }).catch(err => {
      console.error(err)
    })
  } else {

  }
  }

  Hover() {
    if (document.getElementById('dp').style.display == 'block') {
      document.getElementById('dp').style.display = 'none'  
    } else {
    document.getElementById('dp').style.display = 'block'
    }
  }

  ngOnInit(): void {
    this.Form = this.data.group({
      Name: ['', [Validators.maxLength(25), Validators.required, Validators.minLength(1)]],
      Company: ['',[Validators.maxLength(25), Validators.required, Validators.minLength(1)]],
      Email: ['',[Validators.maxLength(25), Validators.required, Validators.minLength(1)]]
    })

    this.Form.get("Name").valueChanges.subscribe(value => {
      this.Name = value
    })

    this.Form.get("Company").valueChanges.subscribe(value => {
      this.Company = value
    })

    this.Form.get("Email").valueChanges.subscribe(value => {
      this.Email = value
    })
  }

}
