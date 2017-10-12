import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Tag } from '../interfaces/tag';

@Injectable()
export class TagService {
    constructor(private http:Http) {
        this.fetch();
    }
    tags:Tag[];

    // fetches data from /api/Tag endpoint
    fetch() {
        this.http.get("http://cs-mock-timeseries-api.azurewebsites.net/api/Tag").subscribe(response => {
            this.tags = <Tag[]>response.json().data;
        },
        error => {
            console.log(error);
        });
    }

    // accessor method to get a specific tag
    getTag(tagId:string) {
        return this.tags.find(tag => tag.tagId === tagId);
    }
}