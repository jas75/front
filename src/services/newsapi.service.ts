import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ResultArticles} from "../interfaces/article";


@Injectable()
export class NewsapiService {

  constructor(private  http: HttpClient){
  }

  key = "d91cf5d8524149f59353b79dccf8cd1c";
  domain = "https://newsapi.org/v2/top-headlines?country=us&apiKey="+this.key;


  getLatestNews() {
    return this.http.get<ResultArticles>(this.domain);
  }
}
