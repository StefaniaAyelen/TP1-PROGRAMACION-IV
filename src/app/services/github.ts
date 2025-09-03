import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  blog: string;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
}


@Injectable({ // Angular crea una instancia del servicio cuando otro componente o servicio lo necesite.
  providedIn: 'root' // Provee el servicio en el nivel global de la aplicacion, solo habra una unica instancia de este servicio durante toda la app.
})
export class Github {
  private base = 'https://api.github.com/users/'
  constructor(private http:HttpClient) {}

  getUser(username: string): Observable<GitHubUser>{
    return this.http.get<GitHubUser>(this.base + username);
  }

}
