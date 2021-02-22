import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer, ViewChild} from '@angular/core';
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import * as html2canvas from 'html2canvas';
import {SignaturePad} from "angular2-signaturepad/signature-pad";
import {UserService} from "../../core/user/user.service";
import {ProjectsService} from "../../features/projects/projects.service";

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
  modalOptions: NgbModalOptions = {
    size: 'lg'
  };
  fromDraw: boolean = false;
  fromUpload: boolean = false;
  confirm: boolean = false;
  signImg: string;
  error: string;
  success: string;
  showCleanNote: boolean = false;

  fonts = [
    {name: 'Style 1', font: 'font-style-1'},
    {name: 'Style 2', font: 'font-style-2'},
    {name: 'Style 3', font: 'font-style-6'},
    {name: 'Style 4', font: 'font-style-8'},
    {name: 'Style 5', font: 'font-style-9'},
    {name: 'Style 6', font: 'font-style-10'},
    {name: 'Style 7', font: 'font-style-11'}];
  selectedFont: string = 'font-style-1';
  fromSelectStyle: boolean = true;

  @Input('fullName') fullName?: string;
  @Input('userName') userName?: string;
  @Input('userId') userId?: number;
  @Input('hasAccount') hasAccount?: boolean;
  @Input('isProjectResponsable') isProjectResponsable?: boolean;
  @Input('projectId') projectId?: string;
  @Input('editing') editing?: boolean;
  @Output() SendSignature = new EventEmitter<any>();

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = {
    'minWidth': 0.5,
    'canvasWidth': 500,
    'canvasHeight': 200

  };
  beginDrawing: boolean = false;


  constructor(private modalService: NgbModal,
              private elementRef: ElementRef,
              private renderer: Renderer,
              private userService: UserService,
              private projectService: ProjectsService) {
  }

  ngOnInit() {
  }

  open(content) {
    this.selectedFont = 'font-style-1';
    this.fromSelectStyle = true;
    this.fromDraw = false;
    this.fromUpload = false;
    this.confirm = false;
    this.modalService.open(content, this.modalOptions);
  }

  drawStart() {
    this.beginDrawing = true;
    this.showCleanNote = true;
  }

  clean(signaturePad: SignaturePad) {
    this.signaturePad = signaturePad;
    this.signaturePad.clear();
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.signImg = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  getSignatureScreenShoot() {
    if (this.fromSelectStyle) {
      if (this.fullName.length > 0) {
        html2canvas(document.getElementById('signModalContainerText')).then(canvas => {
          this.signImg = canvas.toDataURL('image/png');
          this.confirm = true;
          this.error = '';
        });
      } else {
        this.error = 'EMPTY';
      }
    }
  }

  getSignatureScreenShootDraw(signaturePad: SignaturePad) {
    this.signaturePad = signaturePad;
    if ((this.fromDraw) && (this.beginDrawing)) {
      html2canvas(document.getElementById('signaturePadId').children.item(0)).then(canvas => {
        this.signImg = canvas.toDataURL('image/png');
        this.confirm = true;
        this.error = '';
      });
    } else {
      this.error = 'PAD_EMPTY';
    }
  }

  getSignatureScreenShootUpload() {
    if ((this.fromUpload) && (this.signImg)) {
      this.confirm = true;
      this.error = '';
    } else {
      this.error = 'IMAGE_NOT_FOUND';
    }
  }

  adoptAndSign() {
    if (this.isProjectResponsable === false) {
      this.userService.updateImage({
        userId: this.userId,
        imageType: 'Signature',
        imageContent: this.signImg
      }).subscribe(() => {
        this.SendSignature.emit({
          signature: this.signImg
        });
        this.error = 'SUCCESS';
      }, (response) => {
        this.error = 'ERROR';
      });
    } else {
      this.projectService.updateSignature({
        id: this.projectId,
        signature: this.signImg
      }).subscribe(() => {
        this.SendSignature.emit({
          signature: this.signImg
        });
        this.error = 'SUCCESS';
      }, (response) => {
        this.error = 'ERROR';
      });
    }
  }

}
