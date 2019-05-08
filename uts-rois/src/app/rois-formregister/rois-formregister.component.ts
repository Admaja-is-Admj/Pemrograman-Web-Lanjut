import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rois-formregister',
  templateUrl: './rois-formregister.component.html',
  styleUrls: ['./rois-formregister.component.css']
})
export class RoisFormregisterComponent implements OnInit {
  form = new FormGroup({
    nama: new FormControl('', [Validators.required, Validators.minLength(3)]),
    alamat: new FormControl('', Validators.required),
    tanggallahir: new FormControl('', Validators.required),
    notlp: new FormControl('', [Validators.required, Validators.pattern('0-9')]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    jeniskelamin: new FormControl('',Validators.required)
  })
  get nama() {
    return this.form.get('nama');
  }
  get alamat() {
    return this.form.get('alamat');
  }
  get tanggallahir() {
    return this.form.get('tanggallahir');
  }
  get notlp() {
    return this.form.get('notlp');
  }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  get jeniskelamin() {
    return this.form.get('jeniskelamin');
  }
  constructor() { }

  ngOnInit() {
  }

}
