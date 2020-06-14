import { Component, OnInit } from "@angular/core";
import * as data from "../data.json";
import { Product } from "../models/product";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  selectedItem: Product;
  lists: Product[];
  constructor() {
    this.lists = (data as any).default;
    console.log(this.lists);
  }
  ngOnInit(): void {}
  showPopup(item) {
    this.selectedItem = item;
    console.log(this.selectedItem);
  }

  tang() {
    this.selectedItem.count += 1;
  }

  giam() {
    if (this.selectedItem.count <= 1) {
      this.selectedItem.count = 1;
    } else {
      this.selectedItem.count -= 1;
    }
  }

  addItem(item) {
    const selectItems: Product[] = JSON.parse(
      localStorage.getItem("item") || "[]"
    );

    const result: Product = selectItems.find((e) => e.id === item.id);
    if(result) {
      result.count += item.count;
    } else {
      selectItems.push(item);
    }
    
    localStorage.setItem("item", JSON.stringify(selectItems));
    console.log("=======");
    console.log(selectItems);
    console.log(JSON.stringify(item));
  }
}
