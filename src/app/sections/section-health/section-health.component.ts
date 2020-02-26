import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/shared/server';

const SAMPLE_SERVERS = [
  {id: 1, name: 'dev-sit', isOnline: false},
  {id: 2, name: 'dev-uat', isOnline: true},
  {id: 3, name: 'dev-web', isOnline: true},
  {id: 4, name: 'prod', isOnline: true},

]
@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  servers: Server[] = SAMPLE_SERVERS;

  constructor() { }

  ngOnInit() {
  }

}
