import { Injectable } from '@angular/core';
import { Http, ResponseContentType, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { TagService } from './tag.service';
import { DataPoint } from '../interfaces/data-point';
import { Tag } from '../interfaces/tag';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import * as moment from 'moment/moment';

@Injectable()
export class DataPointService {
    dataPoints:DataPoint[];
    currentTag:Tag;
    lineChartData:Array<any> = [{data: []}];
    lineChartLabels:Array<any> = [];
    chartDataReady = false;

    public lineChartOptions:any = {
        responsive: true,
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: ""
            },
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

    constructor(private http:Http, private toastr:ToastsManager, private tagService:TagService, private router:Router) {
    }

    // fetch data points with option endTS field
    fetch(tagId:string, startTS:string, endTS = undefined) {
        // use RequestOptionsArgs, default to current time in utc for endTS
        this.getCurrentTag(tagId);
        if(this.currentTag) {
            this.http.get("http://cs-mock-timeseries-api.azurewebsites.net/api/DataPoint/"+this.currentTag.tagId,
                { params: { startTS: startTS, endTS: endTS || moment().toDate().toISOString().replace('Z', '')},
                responseType: ResponseContentType.Json})
                .subscribe(
                response => {
                    this.dataPoints = <DataPoint[]>response.json();
                    this.processChartData();
                },
                error => {
                    console.log(error);
                    // let's toast the user with a notification if something went wrong!
                    this.toastr.error("An error occurred will attempted to get Data Point data.", "ERROR!");
                }
            );
        }
        else {
            this.toastr.info('Please reselect your tag.', 'INFO');
            this.router.navigate(['/']);
        }
    }
    private getCurrentTag(tagId:string) {
        this.currentTag = this.tagService.getTag(tagId);
    }
    private processChartData() {
        this.lineChartData = [{data: [], label: this.currentTag.unit}];
        this.lineChartLabels = [];
        // we don't want more than 100 points so let's make sure we don't get that much
        var limit = Math.ceil(this.dataPoints.length / 200)
        this.dataPoints.forEach((datapoint,idx) => {
            if(idx % limit === 0) {
                if(isNaN(datapoint.value)) {
                    this.lineChartData[0].data.push((datapoint.value.toString().toLowerCase() === 'on') ? 1 : 0)
                }
                else {
                    this.lineChartData[0].data.push(datapoint.value);
                }
                this.lineChartLabels.push(datapoint.observationTS);
            }
        });
        this.lineChartOptions.scales.yAxes[0].scaleLabel.labelString = this.currentTag.unit;
        this.chartDataReady = true;
    }
}