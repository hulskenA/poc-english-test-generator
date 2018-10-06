import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from "../../../environments/environment";

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
}
