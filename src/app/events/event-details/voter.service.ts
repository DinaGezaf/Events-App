import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { ISession } from "../shared/index";


@Injectable()
export class VoterService{
    constructor (private http:HttpClient){}
    deleteVoter(eventId:number | undefined,session :ISession,voterName:string):void{
        session.voters = session.voters.filter(voter =>voter !== voterName)
        const url =`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url)
        .pipe(catchError(this.handleError('addVoter')))
        .subscribe();
    }
    addVoter(eventId:number| undefined, session:ISession, voterName:string):void{
        session.voters.push(voterName);
        const options ={headers:new HttpHeaders({'Content-Type':'/application/json'})}
        const url =`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.post(url,{},options)
        .pipe(catchError(this.handleError('addVoter')))
        .subscribe();
    }
    
    userHasVoted(session:ISession,voterName:string):boolean{
        return session.voters.some(voter => voter === voterName)
    }
    private handleError<T> (operation ='operation',result?: T){
        return (error:any):Observable<T> =>{
          console.log(error);
          return of(result as T);
        }
      }
}