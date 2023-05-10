import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvMakerService {
  
  constructor(private http: HttpClient) { }

  createCV(checkoutForm: any) {
    console.log("service called");
    console.log(checkoutForm.value);
    return this.http.post('http://localhost:8081/backend', checkoutForm.value, {responseType: 'blob'})
  }
}
