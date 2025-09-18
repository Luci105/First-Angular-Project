import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  message = 'Hello from Service';
  constructor() { }
}
