import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  userFilter:any = {name:''};
  constructor(private filterPipe: FilterPipe) { 
    console.log(filterPipe.transform(this.friends, {name:''}));
  }
  log(z) {
    console.log(z);
  }

  friends=[
    {id:1,name:"John Admaja", 
    email: "rois.admj@gmail.com", 
    contact: "082139174677"}
  ];

  submit(form) {
    this.friends.push({id: this.friends.length +1, name:
    this.uppercase(form.name), email:form.email, contact: form.contact});
    form.valid;
  }
  uppercase(nama){
    return nama.toUpperCase();
  }
  ngOnInit() {
  }

}
