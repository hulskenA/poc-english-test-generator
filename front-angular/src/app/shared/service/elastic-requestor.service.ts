import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs/index";
import { Item } from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class ElasticRequestorService {

  itemsIndex: String = `${environment.api.url}/items`;
  usersIndex: String = `${environment.api.url}/users`;

  constructor(private http: HttpClient) { }

  private checkCrash(response: any): boolean {
    return "error" in response;
  }

  /* Inserting/Updating items into ES */

  public createItem(item: Item) : Observable<any> {
    delete item.id;
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let response = this.http.post(`${this.itemsIndex}/_doc`,item,options);
    if (!this.checkCrash(response))
      return response;
  }

  public updateItem(item: Item) : Observable<any> {
    let url = `${this.itemsIndex}/_doc/${item.id}/_update`;
    delete item.id;
    let body = {
      doc_as_upsert: true,
      doc: item
    };
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let response = this.http.post(url,body,options);
    if (!this.checkCrash(response))
      return response;
  }

  public bulkUpsertItem(items: Item[]): void {
    // later
  }

  /* Searching for items in ES */

  public search(filter: String = null) : Observable<Item[]> {
    let url = `${this.itemsIndex}/_search`;
    if (filter) {}
    let response = this.http.get<any>(url);
    if (!this.checkCrash(response)) {
      let items = [];
      response.subscribe(data => {
        data.hits.hits.map(hit => items.push(hit._source));
      });
      return Observable.create(obs => {
        obs.next(items);
        obs.complete();
      });
    }
  }
}
