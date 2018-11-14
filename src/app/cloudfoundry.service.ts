import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Foundation } from '../models/foundation.model';

@Injectable({
  providedIn: 'root'
})
export class CloudfoundryService {

  constructor(private http: HttpClient) {}

  getFoundations(): Observable<Foundation[]> {
    return this.http
      .get<Foundation[]>(`/api/foundations`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
