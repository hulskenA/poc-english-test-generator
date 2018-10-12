import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from "../../shared/model/item"

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  public items: Item[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(({items}) => {
      this.items = items;
    });
  }

  public onFilter(itemsFiltered: Item[]): void {
    this.items = itemsFiltered;
  }
}
