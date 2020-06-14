import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  lists = [];
  constructor() { 
    this.lists = JSON.parse(localStorage.getItem('item'))|| [];

  }
  
  ngOnInit(): void {
  }
total(){
  let   sum=0;
  this.lists.forEach( item => {
    sum+=item.count*item.price;
  });
  return sum;
}

}
