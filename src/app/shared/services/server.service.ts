import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Server } from '../server';
import { ServerMessage } from '../server-message';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {


  constructor(
    private http: HttpClient
  ) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'q=0.8;application/json;q=0.9'
    })
  };

  getServer(): Observable<Server[]> {
    return this.http.get<Server[]>(`${environment.apiUrl}/api/servers`)
    .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: any) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  handleServerMessage(msg: ServerMessage): Observable<Response> {
    return this.http.put<Response>(`${environment.apiUrl}/api/servers/message/${msg.id}`, msg, this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

}
