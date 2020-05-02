import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Log } from '../../models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  // so, logs it is an array of objects
  logs: Log[];

  constructor(private logService: LogService) {
    logService.getLogs().subscribe((logs) => {
      this.logs = logs;
    });
  }

  ngOnInit(): void {}

  onSelect(log: Log) {
    this.logService.setFormLog(log);
  }
}
