import { Component, OnInit } from '@angular/core';
import { TagService } from '../services/tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-list-table',
  templateUrl: './tag-list-table.component.html',
  styleUrls: ['./tag-list-table.component.css']
})
export class TagListTableComponent implements OnInit {
  rows:Array<any> = this.tagService.tags;
  filteredText = "";
  constructor(public tagService:TagService, private router:Router) { }

  ngOnInit() {
  }

  public changeFilter(data:any, filterString:string):any {
    let filteredData:Array<any> = data;
    filteredData = filteredData.filter((item:any) => {
      // if we are filtering by features it needs to filter through each feature
        return item.features.filter((feature:any) => {
          return feature.match(filterString);
        }).length > 0;
    });

    return filteredData;
  }

  onSearchChange(filterString, searchText):any {
    //notice we use tagService to filter
    let filteredData = this.changeFilter(this.tagService.tags, this.filteredText);
    // reassign rows
    this.rows = filteredData;
  }
}
