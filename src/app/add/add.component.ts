import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { ApiService } from '../api.service';
import { Item } from '../Item';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  item: Item = new Item();
  constructor(public toastr: ToastrManager, private service: ApiService) { }

  ngOnInit() {
  }

  addData() {
    this.item.itemName = this.form.value.itemName;
    this.service.postItem(this.item).subscribe(data => {
      console.log(data);
      this.toastr.successToastr('Item Added', 'Success!');
      this.form.reset();
    });
  }
}
