import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sid-nav',
  templateUrl: './sid-nav.component.html',
  styleUrls: ['./sid-nav.component.scss']
})

export class SidNavComponent implements OnInit {
  openList!: boolean;
  constructor(private _route: Router) { }
  goTo(position: string) {
    this._route.navigate([position])
  }
  logOut(): void {
    if (localStorage.getItem('userName')) {
      localStorage.removeItem('userName')
      localStorage.removeItem('email')
      this._route.navigate(["signup"])
    }
  }
  ngOnInit(): void {
  }

}
