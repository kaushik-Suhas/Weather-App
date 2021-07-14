import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.css']
})
export class SideHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 goToWelcome(){
   this.router.navigate(['/welcome'])
  }

  goToResult() {
    this.router.navigate(['/results'])
  }
}
