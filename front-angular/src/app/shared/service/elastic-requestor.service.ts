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

  /* Index intialiazation methods */

  public initUsersIndex() : Observable<any> {
    let response = this.http.client.put(this.usersIndex);
    if (!checkCrash(response))
      return response;
  }

  public initItemsIndex() : Observable<any> {
    let response = this.http.client.put(this.itemsIndex);
    if (!checkCrash(response))
      return response;
  }

  /* Inserting/Updating items into ES */

  public createItem(item: Item) : Observable<any> {
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
    let response = this.http.client.post(`${this.itemsIndex}/_doc`,body,options);
    if (!checkCrash(response))
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
    let response = this.http.client.post(url,body,options);
    if (!checkCrash(response))
      return response;
  }

  public bulkUpsertItem(items: Item[]): void {
    // later
  }

  /* Searching for items in ES */

  public search(filter: String = null) : Observable<Item[]> {
    let url = `${this.itemsIndex}/_search`;
    let response = this.http.client.get(url);
    if (!checkCrash(response)) {
      let items = response.hits.hits.map(hit => hit._source.doc);
      return Observable.create(obs => {
        obs.next(items);
        obs.complete();
      });
    }
  }
}
