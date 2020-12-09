import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  line1 = `getData() {
    //Gets and receive the document and creates a referance to it
    var path = this.database.GMAD().getData('COLLECTION_ID', 'DOCUMENT_ID')

    //gets the "name" property on the document
    path.data().name

    //end of function
  }`

  imports = `import Database from 'gmad';
  import { Component, OnInit } from '@angular/core';
  `

  line2 = `constructer(
    private database: Database
  ) {}`

  line3 = `setData() {
    //Allows you to set the ID
    this.database.GMAD().Set('COLLECTION_ID', 'DOCUMENT_ID', {
      name: 'hello from the database',
      age: '21'
    })
  }

  addData() {
    //Generates an ID
    this.database.GMAD().Add('COLLECTION_ID', {
      name: 'hello from the database',
      age: '21'
    })
  }
  `

  line4 = `// Make a data hook
  //First we need to use an built-in import 
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  // Back to the constructer

  constructer(
    private data: FormBuilder,
    ) {}

    // Property's
    
  Form: FormGroup
  Name = ''
  Company = ''
  Email = ''

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
  
  // HTML
  
  <div class="form-control" [formGroup]="Form">
                    <input type="text" formControlName="Name" required placeholder="Name">
                </div>
                <div class="form-control" [formGroup]="Form">
                    <input type="text" name="Company" 
                    formControlName="Company"
                     required placeholder="Company Name">
                </div>
                <div class="form-control" [formGroup]="Form">
                    <input type="email" name="email"
                     formControlName="Email" 
                     placeholder="Email" required>
                </div>
                <input (click)="onSubmit()" type="submit" value="Send" class="btn btn-primary">
                
                // End of HTML

                // Submit Handler

                onSubmit() {
                  // retrieve the Name field
                  var name = this.Name

                  //retrieve the Company field
                  var company = this.Company

                  //retrieve the Email field
                  var email = this.Email

                  // Lets add this in our database!

                  this.database.GMAD().Add("Form submission", {
                    Name: name,
                    Company: company,
                    Email: email
                  }).then(form => {
                    // Promise resolved
                  }).catch(error => {
                    // Promise rejected
                  })
                }
 `

 line5 = `this.database.enableStatus()`
  constructor() { }

  ngOnInit(): void {
  }

}
