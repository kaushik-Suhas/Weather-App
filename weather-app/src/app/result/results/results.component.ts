import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  displayResults: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.displayResults = this.route.firstChild?.snapshot.params ? true: false;
  }
   
}
