import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

import { Observable, BehaviorSubject, of } from 'rxjs';

// BehaviorSubject class represents a value that changes over time.
// Observers can subscribe to the subject to receive the last (or initial)
// value and all subsequent notifications.

// of -> allow us to declare an array as an observable

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });

  selectedLog = this.logSource.asObservable();

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

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((logs, index) => {
      if (logs.id === log.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  delete(log: Log) {
    this.logs.forEach((logs, index) => {
      if (logs.id === log.id) {
        this.logs.splice(index, 1);
      }
    });
  }
}
