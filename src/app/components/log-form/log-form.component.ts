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

  isNew: boolean = true;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    // Subscribe to the selectedLog observable
    this.logService.selectedLog.subscribe((log) => {
      if (log.id !== null) {
        // so this form will get all the information of the selected component. See, that it will display in html only the text however, it should grab anyway the complete information.

        // means that
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  onSubmit() {
    // check if new log
    if (this.isNew) {
      // Create a new log
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date(),
      };
      // Add log
      this.logService.addLog(newLog);
    } else {
      // Create log to be updated
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date(),
      };

      // Update log
      this.logService.updateLog(updLog);
    }
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
