import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  constructor() { }

  public pagesArray: Array<number>;
  public currentPage = 1;

  @Input() set setPagination(pagination: MyPagination) {
    let pagesAmount = 0;
    if (pagination) {
      pagesAmount = Math.ceil(
        pagination.itemsCount / pagination.pageSize
      );
      this.pagesArray = new Array(pagesAmount).fill(1);
    }
  }

  @Input() set resetPageNumber(resetPageNumber: number) {
    this.currentPage = resetPageNumber;
  }

  @Output() goToPage: EventEmitter<number> = new EventEmitter<number>();

  public setPage(pageNumber: number): void {
    if (pageNumber === this.currentPage) {
    return;
    }
    this.currentPage = pageNumber;
    this.goToPage.emit(pageNumber);
  }
}

export interface MyPagination {
  itemsCount: number;
  pageSize: number;
}
