import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Crash } from "../modules/crashevent";
import { ErrorHandlerService } from "./error-handler.service";



@Injectable({
  providedIn: 'root'
})
export class CrashService {
  private url = "http://localhost:4200/posts";
  
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  
  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) {}

  fetchAll(): Observable<Crash[]> {
    return this.http
      .get<Crash[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched groceries")),
        catchError(
          this.errorHandlerService.handleError<Crash[]>("fetchAll", [])
        )
      );
  }
  post(item: Partial<Crash>): Observable<any> {
    return this.http
      .post<Partial<Crash>>(this.url, item, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("post")));
  }

}
