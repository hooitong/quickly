import { ShowsQueryService } from './../shows-query.service';
import { Show } from './../show.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-daily-schedule',
  templateUrl:  './show-daily-schedule.component.html',
  styleUrls: ['./show-daily-schedule.component.css']
})
export class ShowDailyScheduleComponent implements OnInit {
  private static readonly DEFAULT_DATE = new Date();

  private shows: Show[];
  private selectedDate: Date;
  constructor(private helper: ShowsQueryService) {
    this.selectedDate = ShowDailyScheduleComponent.DEFAULT_DATE;
  }

  public ngOnInit() {
    this.helper.getShowsByDay(this.selectedDate).subscribe(
      (shows) => {
        this.shows = shows;
      }
    );
  }
}
