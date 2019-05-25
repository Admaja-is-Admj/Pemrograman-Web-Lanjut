import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';
// import { contactData } from '../contact-form/contact';

class contactData {
  constructor(
    public label:string='Your data',
    public labelName: string='Nama',
    public labelEmail: string='Email',
    public labelMessage: string='Message',
    public yourname:string='',
    public youremail:string='',
    public yourmessage:string=''
  ) {}
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
}) 

export class ContactFormComponent implements OnInit {
 
  constructor() { }
  
  inputData:contactData[] = [];
  inputModel: contactData;
  submitType:string = "Save";

  from = new FormGroup({
    nama:new FormControl(""),
    emailvalid:new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    comment:new FormControl("")
  });

  get Email() {
    return this.from.get("email");
  }

  onSave() {
    if (this.submitType == "Save") {
      this.inputData.push(this.inputModel);
    }
  }
  onNew() {
    this.inputModel= new contactData();
    this.submitType= "Save";
  }
  ngOnInit() {
  }

}
