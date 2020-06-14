import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  lists = [];
  constructor() { 
    this.lists = JSON.parse(localStorage.getItem('item'))|| [];
  }
  ngOnInit(): void {
  }
totalCount(){
let total=0;
this.lists.forEach(e => {
  total+=e.count
});
return total;
console.log(total);

}
}
