import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ConfigService {
  BASE_API_URL: string = 'http://localhost:3001/api/v1/';
}