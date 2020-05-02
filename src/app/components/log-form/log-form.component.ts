import { Component, OnInit } from '@angular/core';

import { LogService } from '../../services/log.service';
import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
})
export class LogFormComponent implements OnInit {
  log: Log;

  id: string;
  text: string;
  date: any;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    // Subscribe to the selectedLog observable
    this.logService.selectedLog.subscribe((log) => {
      if (log.id !== null) {
        // so this form will get all the information of the selected component. See, that it will display in html only the text however, it should grab anyway the complete information.
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }
}
