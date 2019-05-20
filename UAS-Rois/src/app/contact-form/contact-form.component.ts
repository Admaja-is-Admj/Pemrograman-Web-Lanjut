import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() nama:string;
  @Input() email:string;
  @Input() message:string;

  constructor() { }

  ngOnInit() {
  }

}
