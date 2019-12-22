import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pagination-length',
  templateUrl: './pagination-length.component.html',
  styleUrls: ['./pagination-length.component.scss']
})
export class PaginationLengthComponent implements OnInit {

  constructor( private httpService: HttpService) {
  }
  paginationList: Array<number> = [5, 10, 25, 100];
  indexOfSelectedValue: number;

  @Output() currentPagination = new EventEmitter();

  ngOnInit() {
    if (this.httpService.listSize == undefined) {
      this.indexOfSelectedValue = this.paginationList[0];
      this.currentPagination.emit(this.paginationList[0]);
    }
    else{
      this.currentPagination.emit(this.httpService.listSize);
      this.indexOfSelectedValue = this.httpService.listSize;
    }
  }

  checkValue(event) {
  
    this.currentPagination.emit(event);
  }

}
