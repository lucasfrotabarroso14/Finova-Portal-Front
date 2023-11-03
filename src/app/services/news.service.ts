import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NewsArticle } from '../Interfaces/Noticias';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseApiUrl = `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=fd239ece050a4ed8aa8b2679eaea9284`

  constructor(private http : HttpClient) { }

  getNews():Observable<NewsArticle[]> {
    return this.http.get<{articles : NewsArticle[]}>(this.baseApiUrl)
    .pipe(
      map((response)=>response.articles))

  }
}
