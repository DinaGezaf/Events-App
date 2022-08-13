import { Component, Inject } from '@angular/core';
import { JQ_TOKEN } from './common';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template:`
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  constructor(private auth :AuthService,@Inject(JQ_TOKEN) private $:any){
    

  }
  ngOnInit(){
    this.auth.checkAuthenticationStatus();
    console.log(window)
    console.log(this.$)
  }
}
