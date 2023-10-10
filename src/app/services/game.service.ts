import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Game } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  baseUrl = 'http://localhost:8080/api/v1';

  private juegos: Game[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Obtiene los juegos
   *
   * @returns observable con lista de juegos
   */
  getGames(): Observable<Game[]> {
    const endpoint = `${this.baseUrl}/goty`;
    return this.http.get<Game[]>(endpoint);
  }

  getNominados() {
    if (this.juegos.length > 0) {
      // no tenemos juegos
      console.log('Desde caché');
      return of(this.juegos);
    } else {
      console.log('Desde Internet');
      return this.http
        .get<Game[]>(`${this.baseUrl}/goty`)
        .pipe(tap((juegos) => (this.juegos = juegos)));
    }
  }

  /**
   *
   *
   * @param id string games
   * @returns observable vote
   */
  votesGames(id: string): Observable<any> {
    const endpoint = `${this.baseUrl}/goty/vote/${id}`;
    return this.http.get(endpoint).pipe(
          catchError( err => {
            return of( err.error );
          })
        );
  }
}
