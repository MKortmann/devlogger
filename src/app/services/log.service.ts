import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];
  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated components',
        date: new Date('12/26/2017 12:54:23'),
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date('12/27/2017 12:54:23'),
      },
      {
        id: '3',
        text: 'Buy components',
        date: new Date('12/13/2017 12:15:23'),
      },
    ];
  }

  getLogs() {
    return this.logs;
  }
}
