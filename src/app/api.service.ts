import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://b3d930df-dd58-4968-8f4e-ebecd968a934.mock.pstmn.io';
  get(entryPoint: string, errorOperation: string): Observable<any> {
    return this.http.get(this.baseUrl + entryPoint).pipe();
  }

  post(entryPoint: string, body: any, errorOperation: string): Observable<any> {
    return this.http.post(this.baseUrl + entryPoint, body);
  }

  delete(entryPoint: string, errorOperation: string): Observable<any> {
    return this.http.delete(this.baseUrl + entryPoint);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
