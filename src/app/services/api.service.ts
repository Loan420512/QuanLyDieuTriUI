// api service sample

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private BASE_URL = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.BASE_URL}/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.BASE_URL}/register`, data);
  }

  getPatients() {
    return this.http.get(`${this.BASE_URL}/patients`);
  }
}
