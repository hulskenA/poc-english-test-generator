import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from "rxjs/index";

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent implements OnInit {
  asyncTabs: Observable<any[]>;

  constructor() {
    this.asyncTabs = Observable.create((observer: Observer<any[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }

  ngOnInit() {
  }

}
