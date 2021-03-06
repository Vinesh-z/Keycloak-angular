import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private api: ApiService) { }
  items: any;
  ngOnInit() {
    this.api.getList().subscribe(res => {
      console.log(res);
      this.items = res;
    });
  }

}
