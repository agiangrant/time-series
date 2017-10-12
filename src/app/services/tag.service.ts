import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, ResponseContentType } from '@angular/http';
import { Tag } from '../interfaces/tag';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class TagService {
    constructor(private http:Http, private toastr:ToastsManager) {
        this.fetch();
    }
    rows:Tag[];
    tags:Tag[];

    // fetches data from /api/Tag endpoint
    fetch() {
        this.http.get("http://cs-mock-timeseries-api.azurewebsites.net/api/Tag", {responseType: ResponseContentType.Json}).subscribe(response => {
            this.tags = <Tag[]>response.json();
            if(!this.rows) {
                this.rows = this.tags;
            }
        },
        error => {
            console.log(error);
            // let's toast the user with a notification if something went wrong
            this.toastr.error("An error occurred while attempting to get Tag data.", "ERROR!");
        });
    }

    // accessor method to get a specific tag
    getTag(tagId:string) {
        if(this.tags) {
            return this.tags.find(tag => tag.tagId === tagId);
        }
        else {
            return null;
        }
    }
}