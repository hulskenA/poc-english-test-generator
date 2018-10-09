import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tests-list-item',
  templateUrl: './tests-list-item.component.html',
  styleUrls: ['./tests-list-item.component.scss']
})
export class TestsListItemComponent implements OnInit {

  @Input()
  public testDate: Date;
  @Input()
  public level: number;

  constructor() { }

  ngOnInit() {
  }

}
