import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
}


@Injectable({ // Angular crea una instancia del servicio cuando otro componente o servicio lo necesite.
  providedIn: 'root' // Provee el servicio en el nivel global de la aplicacion, solo habra una unica instancia de este servicio durante toda la app.
})
export class Github {
  private base = 'https://api.github.com/users/'
  constructor(private http:HttpClient) {}

  getUser(username: string): Observable<GitHubUser>{ //El observable emite los datos de GitHubUser
    return this.http.get<GitHubUser>(this.base + username); //mediante el observable puedo acceder a esos datos
  }

}
