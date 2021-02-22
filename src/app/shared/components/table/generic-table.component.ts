import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from './generic-table-classes';

@Component({
  selector: 'gr-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnInit {

  @Input() table: Table;
  @Output() actionClick: EventEmitter<any> = new EventEmitter();
  @Output() limitChange: EventEmitter<any> = new EventEmitter();
  @Output() pageChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onActionClick(row: any, action: string) {
    this.actionClick.emit({ row, action });
  }

  onLimitChange(limit: number) {
    this.limitChange.emit(limit);

  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  getCSSClasses(flag: string) {
    let cssClasses;
    switch (flag) {
      case 'VALIDATE': {
        cssClasses = 'badge bg-success bg-primary-custom-third';
        break;
      }
      case 'CREATED': {
        cssClasses = 'badge bg-primary bg-primary-custom';
        break;
      }
      case 'SENT': {
        cssClasses = 'badge bg-primary bg-primary-custom-second';
        break;
      }
      case 'INCOMPLETE': {
        cssClasses = 'badge bg-warning';
        break;
      }
      case 'WaitingForCreation': {
        cssClasses = 'badge bg-danger bg-primary-custom-fourth';
        break;
      }
      default: {
        cssClasses = 'badge bg-danger bg-primary-custom-fourth';
        break;
      }
    }
    return cssClasses;
  }

  getColspan(length: number, actions: any) {
    if (actions && actions.length > 0) {
      return length + 1;
    } else {
      return length;
    }
  }

  getButtonClassByStatusAndCondition(status: string, action: string) {
    if (action === 'SEND' && status === 'CREATED' || status === 'REJECTED') {
      return 'btn btn-warning btn-sm m-1';
    } else {
      return 'btn btn-danger btn-sm m-1 btn-action-custom-fourth';
    }
  }

}
