import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  show =  true;
  canvas = false;

  constructor() { }

  ngOnInit() {
  }

  onToggelSideBar(show: boolean): void {
    this.show = show;
  }

  onToggelCanvas(canvas: boolean): void {
    this.canvas = canvas;
  }

}
