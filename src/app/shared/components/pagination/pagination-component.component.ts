import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-component',
  templateUrl: './pagination-component.component.html',
  styleUrls: ['./pagination-component.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() total: number;
  @Input() limit: number;
  @Input() page: number;
  @Input() showItemsPerPages: boolean;
  @Input() itemsPerPages: number[] = [10, 15, 20];

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() limitChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onPager(event: number): void {
    this.pageChange.emit(event);
  }

  onClick(value) {
    this.limit = value;
    this.limitChange.emit(value);
  }

}
