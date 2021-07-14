import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  data: {
    location: string;
    days: string;
    name: string;
  }
  items = [];
  location: string; 

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.data = {
      location: this.route.firstChild.snapshot.params['key'],
      days: this.route.firstChild.snapshot.params['days'],
      name: this.route.firstChild.snapshot.params['name'],
    };

    this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/${this.data.days}day/${this.data.location}?apikey=I3za6sPhS7BZsp2s70GViaFav7xZhq0k`)
        .subscribe(response  => {
          console.log(response)
         response["DailyForecasts"].map(forecast => {
            this.items.push(forecast)
          })
         })
  }

  getResult(){
    
  }

  getDate(rDate){
    const date = new Date(rDate);
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
  }
}
