import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/index';
import {ActivatedRouteSnapshot} from '@angular/router';
import {TestLevelService} from "../service/test-level.service";


@Injectable()
export class AllTestLevelResolver {

  constructor(private testLevelService: TestLevelService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<number[]> {
    return this.testLevelService.findAllLevels();
  }
}
