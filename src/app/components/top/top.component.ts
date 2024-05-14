import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent {
  // public token;
  public user: any = {};

  constructor(private _router: Router) {
    // this.token = localStorage.getItem('token');
    let str_user: any = localStorage.getItem('user');
    this.user = JSON.parse(str_user);
    console.log(this.user);
  }

  logout() {
    localStorage.clear();
    window.location.reload();
    //this._router.navigate(['/']);
  }
}
