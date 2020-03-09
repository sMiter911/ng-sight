import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Server } from '../shared/server';
import { ServerMessage } from '../shared/server-message';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input() serverInput: Server;
  @Output() serverAction = new EventEmitter<ServerMessage>();

  color: string;
  buttonText: string;
  isLoading: boolean;
  serverStatus: string;

  constructor() { }

  ngOnInit() {
    this.setServerStatus(this.serverInput.isOnline);
  }

  // toggleStatus(onlineStatus: boolean) {
  //   console.log(this.serverInput.name + ':', onlineStatus);
  //   this.setServerStatus(!onlineStatus);
  // }

  setServerStatus(isOnline: boolean) {
    if (isOnline) {
      this.serverInput.isOnline = true;
      this.serverStatus = 'Online';
      this.color = '#66bb6a';
      this.buttonText = 'Shut Down';
    } else {
      this.serverInput.isOnline = false;
      this.serverStatus = 'Offline';
      this.color = '#ff6b6b';
      this.buttonText = 'Turn On';
    }
  }

  makeLoading() {
    this.color = '#FFCA28';
    this.buttonText = 'Pending..';
    this.isLoading = true
    this.serverStatus = 'Loading';
  }

  sendServerAction(isOnline: boolean) {
    console.log('Send Server Action Called!!!')
    this.makeLoading();
    const payLoad = this.buildPayload(isOnline);
    this.serverAction.emit(payLoad);
  }

  buildPayload(isOnline: boolean): ServerMessage {
    if (isOnline) {
      return {
        id: this.serverInput.id,
        payload: 'deactivate'
      };
    } else {
      return {
        id: this.serverInput.id,
        payload: 'active'
      };
    }
  }

}
