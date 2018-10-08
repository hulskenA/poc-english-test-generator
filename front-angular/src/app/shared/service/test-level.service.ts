import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";
import { environment } from "../../../environments/environment";
import { Item } from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class TestLevelService {

  constructor(private http: HttpClient) { }

  public findAllLevels(): Observable<number[]> {
    const url = `${environment.api.url}/test-level/`;

    return Observable.create(observer => {
      observer.next([1, 2, 3]);
      observer.complete();
    });
    return this.http.get<number[]>(url);
  }

  public findByLevel(level: number) {
    const url = `${environment.api.url}/test/${level}`

    return Observable.create(observer => {
      observer.next([
        {
          id: 1
        },
        {
          id: 42
        }
      ]);
      observer.complete();
    });
    return this.http.get<Item[]>(url);
  }
}
