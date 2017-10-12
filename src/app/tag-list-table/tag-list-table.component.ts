import { Component, OnInit } from '@angular/core';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-tag-list-table',
  templateUrl: './tag-list-table.component.html',
  styleUrls: ['./tag-list-table.component.css']
})
export class TagListTableComponent implements OnInit {
  rows:Array<any> = this.tagService.tags;
  constructor(public tagService:TagService) { }

  ngOnInit() {
  }

}
