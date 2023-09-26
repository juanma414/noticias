import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+
    '&category='+parametros.categoria+
    '&apiKey=080feb18072542b5b65cfb22f4ad4e4d'
    return this.http.get(URL)
  }
}
