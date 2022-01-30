import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(cred: Credentials){
    return this.http.post(`${API_CONFIG.baseUrl}/login`, 
                          cred, 
                          {observe: 'response', responseType:'text'})
  }
  
}
