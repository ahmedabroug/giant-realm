import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'app/auth/services/auth.service';

@Component({
  selector: 'gr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggelCanvas: EventEmitter<boolean> = new EventEmitter<boolean>();
  canvas = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {

  }

  onToggelCanvas(canvas: boolean): void {
    this.canvas = !canvas;
    this.toggelCanvas.emit(this.canvas);
    console.log('canvas:', this.canvas);

  }

}
