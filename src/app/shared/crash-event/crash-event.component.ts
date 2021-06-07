import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";

import { CrashService } from "../crash.service";

import { tap } from "rxjs/operators";
import { Crash } from 'src/app/modules/crashevent';


@Component({
  selector: 'app-crash-event',
  templateUrl: './crash-event.component.html',
  styleUrls: ['./crash-event.component.scss']
})
export class CrashEventComponent implements OnInit {
  
  crashevent$!: Observable<Crash[]>;
  constructor( private crashService: CrashService){}

  ngOnInit(): void {
    this.crashevent$ = this.fetchAll();
  }
  fetchAll(): Observable<Crash[]> {
    return this.crashService.fetchAll();
  }
  // post(crashevent: Partial<Crash>): void {
  //   const event = (<string>crashevent).trim();
  //   if (!event) return;

  //   this.crashevent$ = this.crashService
  //     .post(event)
  //     .pipe(tap(() => (this.crashevent$ = this.fetchAll())));
  // }

}
