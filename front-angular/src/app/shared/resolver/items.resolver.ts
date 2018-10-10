import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/index';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Item} from "../model/item";
import {ElasticRequestorService} from "../service/elastic-requestor.service";


@Injectable()
export class ItemsResolver {

  constructor(private elasticRequestorService: ElasticRequestorService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Item[]> {
    return this.elasticRequestorService.search();
  }
}
