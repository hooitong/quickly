import { Show } from './show.model';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
/**
 * Service that encapsulate API calls to endpoints to retrieve data on shows.
 */
export class ShowsQueryService {
  private static readonly BASE_URL = 'http://api.tvmaze.com';
  private static readonly SUFFIX_SCHEDULE = 'schedule';
  private static readonly DEFAULT_REGION = 'US';

  constructor(private http: Http) {}

  public getShowsByDay(date: Date): Observable<Show[]>  {
      const formattedDate = date.toISOString().substring(0, 10);
      let url = `${ShowsQueryService.BASE_URL}/${ShowsQueryService.SUFFIX_SCHEDULE}?country=${ShowsQueryService.DEFAULT_REGION}&date=${formattedDate}`;
      return this.http.get(url)
                      .map(res => res.json())
                      .map(this.extractResponse)
                      .catch(this.errorHandler);
  }

  private extractResponse(showsJSON: any[]) {
    return showsJSON.map((showJSON) => {
      return new Show(showJSON.show.name, showJSON.show.type, showJSON.season, showJSON.number,
      new Date(showJSON.airstamp), showJSON.show.image.medium, 
      showJSON.summary ? String(showJSON.summary).replace(/<[^>]+>/gm, '') : '' , showJSON.name);
    });
  }

  private errorHandler(error: any) {
    //TODO: To handle error message and logging here.
    return Observable.throw(error);
  }
}
