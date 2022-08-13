import { Component, Inject } from "@angular/core";
import { JQ_TOKEN } from "../common";
import { EventService, ISession } from "../events";
import { AuthService } from "../user/auth.service";

@Component({
    selector:'nav-bar',
    templateUrl:'./nav-bar.component.html',
    styles:[`
    .nav.navbar-nav{font-size:15px;}
    #searchForm {margin-right:100px;}
    @media(max-width:1200px){#searchForm{display:none}}
    li > a.active {color:#F97924;}
    `]
})

export class NavBarComponent{
    searchTerm='';
    foundSessions:ISession[]|undefined
    constructor(public auth:AuthService ,
                 private eventService : EventService,@Inject(JQ_TOKEN) private $:any){ 
                    console.log(window)
                    console.log(this.$)
                    console.log('Dina')
                   }
    searchSessions(searchTerm : any){
        this.eventService.searchSessions(searchTerm).subscribe(
            (sessions: any) => {
                this.foundSessions=sessions;
            }
        )
    }
}
