import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onRedirectHome():void{
    this.router.navigateByUrl('home');
  }
  onRedirectEshop(){
    this.router.navigateByUrl('eshop');
  }
}
