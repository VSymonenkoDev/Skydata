import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
  appId = {APPID: '2faa8fad54abcd886f8894c07565fe10'};

  constructor(private http: Http) {}

  getData(): Observable<any> {
      const params = {
        q: 'kyiv',
        units: 'metric',
      };

      Object.assign(params, this.appId);
      const options = new RequestOptions({params});

      return this.http
              .get('http://api.openweathermap.org/data/2.5/weather?', options)
              .map(res => res.json())
              .catch(this.handleError);
  }

  getDataByCityName(cityName: string) {
    const params = {
      q: 'kyiv',
      units: 'metric',
    };
    const options = new RequestOptions({params});


    return this.http
              .get('http://api.openweathermap.org/data/2.5/weather?', options)
              .map(res => res.json())
              .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
