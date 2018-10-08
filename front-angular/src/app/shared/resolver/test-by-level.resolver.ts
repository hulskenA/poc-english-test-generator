import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/index';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TestLevelService } from "../service/test-level.service";
import { Item } from "../model/item";


@Injectable()
export class TestByLevelResolver {

  constructor(private testLevelService: TestLevelService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Item[]> {
    return this.testLevelService.findByLevel(1);
  }
}
