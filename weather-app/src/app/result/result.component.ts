import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {
  data: {
    location: string;
    days: string;
    name: string;
  }
  items = [];
  location: string;
  private subs: Subscription; 

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.subs = this.route.firstChild.params.subscribe(
      (data) => {
         this.data = {
           location: data.key,
           days: data.days,
           name: data.name
         }
      }
    )

    this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/${this.data.days}day/${this.data.location}?apikey=GO7YhgH0FFaTEa0HsAieNGdofPFn5sfA`)
        .subscribe(response  => {
          console.log(response)
         response["DailyForecasts"].map(forecast => {
            this.items.push(forecast)
          })
         })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getDate(rDate){
    const date = new Date(rDate);
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
  }

  ng
}

 