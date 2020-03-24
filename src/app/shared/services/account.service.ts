import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 * Account Service for managing the current user's account..
 * @class AccountService
 */
@Injectable()
export class AccountService  {
    constructor(private http: HttpClient) { }

  readonly SERVER_API_UAA_URL = 'http://localhost:4201';

  private resourceUrl =  this.SERVER_API_UAA_URL + '/api/account';

  get(): Observable<HttpResponse<Account>> {
        return this.http.get<Account>(this.resourceUrl, {observe : 'response'});
    }

    save(account: any): Observable<HttpResponse<any>> {
        return this.http.post(this.resourceUrl, account, {observe: 'response'});
    }

  updateSkillsUser(account: any): Observable<HttpResponse<any>> {
    return this.http.put(this.SERVER_API_UAA_URL + '/api/updateUserSkills', account, {observe: 'response'});
  }
}
