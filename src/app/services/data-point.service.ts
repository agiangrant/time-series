import { Injectable } from '@angular/core';
import { Http, ResponseContentType, RequestOptionsArgs } from '@angular/http';
import { DataPoint } from '../interfaces/data-point';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import * as moment from 'moment/moment';

@Injectable()
export class DataPointService {
    dataPoints:DataPoint[];
    constructor(private http:Http, private toastr:ToastsManager) {
    }

    // fetch data points with option endTS field
    fetch(tagId:string, startTS:Date, endTS = undefined) {
        // use RequestOptionsArgs, default to current time in utc for endTS
        this.http.get("http://cs-mock-ASDtimeseries-api.azurewebsites.net/api/DataPoint/"+tagId,
            { params: { startTS: startTS, endTS: endTS || moment().toDate()},responseType: ResponseContentType.Json})
            .subscribe(
            response => {
                this.dataPoints = <DataPoint[]>response.json().data;
            },
            error => {
                console.log(error);
                // let's toast the user with a notification if something went wrong!
                this.toastr.error("An error occurred will attempted to get Data Point data.", "ERROR!");
            }
        );
    }
}