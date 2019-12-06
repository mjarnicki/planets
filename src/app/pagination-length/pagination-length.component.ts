import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-length',
  templateUrl: './pagination-length.component.html',
  styleUrls: ['./pagination-length.component.scss']
})
export class PaginationLengthComponent implements OnInit {

  constructor() { }

  paginationList: Array<number> = [5, 10, 25, 100];

  @Output() currentPagination = new EventEmitter();

  ngOnInit() {
    this.currentPagination.emit(this.paginationList[0]);
  }

  checkValue(event) {
    this.currentPagination.emit(event);
  }

}
