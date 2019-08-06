import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { ApiService } from '../api.service';
import { Item } from '../Item';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  item: Item = new Item();
  constructor(private service: ApiService) { }

  ngOnInit() {
  }

  addData() {
    this.item.itemName = this.form.value.itemName;
    this.service.postItem(this.item).subscribe(data => {
      console.log(data);
      this.form.reset();
    });
  }
}
