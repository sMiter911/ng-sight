import { Component, OnInit, OnDestroy } from '@angular/core';
import { Server } from 'src/app/shared/server';
import { ServerService } from 'src/app/shared/services/server.service';
import { Observable, Subscription, timer } from 'rxjs';

// const SAMPLE_SERVERS = [
//   {id: 1, name: 'dev-sit', isOnline: false},
//   {id: 2, name: 'dev-uat', isOnline: true},
//   {id: 3, name: 'dev-web', isOnline: true},
//   {id: 4, name: 'prod', isOnline: true},
// ]

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit, OnDestroy {

  servers: Server[];
  timerSubscription: Subscription;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.refreshData();

  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  refreshData() {
    this.serverService.getServer().subscribe( res => {
      this.servers = res;
    });

    this.subscribeToData();
  }

  subscribeToData() {
    this.timerSubscription = timer(5000).subscribe(() => this.refreshData());
  }

}
