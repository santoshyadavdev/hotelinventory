import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ShareddataService } from '../services/shareddata.service';

@Component({
  selector: 'hinv-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class AppNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  message$ = this.sharedData.message$;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sharedData: ShareddataService
  ) {}
}
