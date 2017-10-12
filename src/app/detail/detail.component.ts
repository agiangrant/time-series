import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataPointService } from '../services/data-point.service';
import { IMyDrpOptions } from 'mydaterangepicker';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  tagId:string;
  startDate:string;
  dateRange;
  // remove clear button so datepicker will always be populated with something
  dateRangePickerOptions:IMyDrpOptions = {dateFormat: 'mm/dd/yyyy',editableDateRangeField: false, showClearDateRangeBtn:false}

  public lineChartOptions:any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }],
      xAxes: [{
        type: 'time',
        time: {
          displayFormats: {
            hour : 'MMM D hA'
          }
        }
      }]
    }
  };
  public lineChartType:string = 'line';
 
  constructor(private route: ActivatedRoute, private router:Router, public dataPointService:DataPointService) {
    this.tagId = route.snapshot.params['tagId'];
    if(!this.tagId) {
      this.router.navigate(['/']);
    }
    else {
      // get the data points with the default date range
      this.startDate = moment().subtract(2, "days").toDate().toISOString().replace('Z', '');
      dataPointService.fetch(this.tagId, this.startDate);

      let startDate = moment().subtract(2, "days");
      let endDate = moment();
      // add one to the month as it's zero indexed
      this.dateRange = {
        beginDate: {year: startDate.year(), month: startDate.month() + 1, day: startDate.date()},
        endDate: {year: endDate.year(), month: endDate.month() + 1, day: endDate.date()}
      };
    }
  }

  ngOnInit() {
  }

  updateChart() {
    if(this.dataPointService.chartDataReady) {
      this.dataPointService.fetch(this.tagId,
        new Date(this.dateRange.beginDate.year, this.dateRange.beginDate.month - 1, this.dateRange.beginDate.day).toISOString().replace('Z', ''),
        new Date(this.dateRange.endDate.year, this.dateRange.endDate.month - 1, this.dateRange.endDate.day).toISOString().replace('Z', ''));
    }
  }
}
