import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import * as XLSX from 'xlsx';




export interface WeatherDetails {
  date: string;
  day: string;
  night: string;
  sources: string;
  maxTemperature: number;
  minTemperature: number;
  link: string;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {
  data: {
    location: string,
    days: string,
    name: string
  }
  items = [];
  location: string;
  private subs: Subscription; 

  displayedColumns: string[] = ['date', 'day', 'night', 'sources', 'maxTemperature', 'minTemperature', 'link'];
  isLoadingResults: boolean = false;
  dataSource: MatTableDataSource<WeatherDetails>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.subs = this.route.firstChild?.params.subscribe(
      (data) => {
         this.data = {
           location: data.key,
           days: data.days,
           name: data.name
         }
      }
    )
    this.isLoadingResults = true;
    this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/${this.data?.days}day/${this.data?.location}?apikey=${environment.apiKey}`)
        .subscribe(response  => {
          console.log(response, 'ed')
         response["DailyForecasts"].map(forecast => {
            this.items.push(forecast)
          })
          this.isLoadingResults = false;
          this.dataSource = new MatTableDataSource<WeatherDetails>(this.items);
          this.dataSource.paginator = this.paginator;
         })
  }
  

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getDate(rDate): string{
    const date = new Date(rDate);
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
  }

  downloadResult() {
    let dataToExport = this.dataSource.filteredData
      .map(x => ({
        Date: x['Date'],
        Day: x['Day']['PrecipitationType'],
        Night: x['Night']['IconPhrase'],
        Temp_max: x['Temperature']['Maximum'].Value,
        Temp_min: x['Temperature']['Minimum'].Value,
        Link: x['Link']
      }));
    const workSheet = XLSX.utils.json_to_sheet(dataToExport );
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
    XLSX.writeFile(workBook, 'report.xlsx');
  }
}

 