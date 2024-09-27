import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor() { }

  getAll(): Observable<Tutorial[]> {
    console.log("Get all tasks data");
    return new Observable();
  }

  get(id: any): Observable<Tutorial> {
    console.log("Get task data");
    return new Observable();
  }

  create(data: any): Observable<any> {
    console.log("Create task data");
    return new Observable();
  }

  update(id: any, data: any): Observable<any> {
    console.log("Update task data");
    return new Observable();
  }

  delete(id: any): Observable<any> {
    console.log("Delete task data");
    return new Observable();
  }
}