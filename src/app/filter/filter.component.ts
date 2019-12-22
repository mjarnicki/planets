import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

  initialValue = '';

  constructor(private httpService: HttpService) {
    this.setSearchSubscription();
   }
   @Output() setValue: EventEmitter<string> = new EventEmitter<string>();
   private searchSubject: Subject<string> = new Subject();

  ngOnInit() {
    if (this.httpService.searchString !== undefined) {
      this.initialValue = this.httpService.searchString;
    }
  }

  public updateSearch(searchTextValue: string) {
    this.searchSubject.next(searchTextValue);
  }

  private setSearchSubscription(){
    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      this.setValue.emit(searchValue);
    });
  }

  ngOnDestroy(): void {
    this.searchSubject.unsubscribe();
  }

}
