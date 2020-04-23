import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gr-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Output() toggelSideBar: EventEmitter<boolean> = new EventEmitter<boolean>();
  show = true;

  constructor() { }

  ngOnInit() {
  }

  getArrow(show: boolean): string {
    if (show) {
      return ' fa-arrow-left';
    } else {
      return 'fa-arrow-right';
    }
  }

  onToggelSideBar(show: boolean): void {
    this.show = !show;
    this.toggelSideBar.emit(this.show);
  }

}
