import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backend';

interface About {
  firstName: string,
  lastName: string,
  title_first: string,
  title_second: string
}

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private _aboutPatrik?: About;

  constructor(private readonly _http: HttpClient) { }

  public getAbout() {
    this._http.get<About>(BACKEND_URL + '/about').subscribe({
      next: (val) => {
        this._aboutPatrik = val;
      }
    })
  }

  public get aboutPatrik() {
    return this._aboutPatrik;
  }
  public set aboutPatrik(value) {
    this._aboutPatrik = value;
  }

}
