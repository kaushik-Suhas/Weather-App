import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.css']
})
export class SideHeaderComponent implements OnInit {
  bgImgToggler: boolean = false;
  constructor(private router: Router) {
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd ) {
         this.bgImgToggler = event.url === '/'; 
      }
    });
   }

  ngOnInit(): void {
    }


 goToWelcome(): void{
   this.router.navigate(['/']);
  }

  goToResult(): void{
    this.router.navigate(['/results']);
  }
}
