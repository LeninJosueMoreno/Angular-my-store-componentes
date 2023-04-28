import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('changes just img =>', this.img);
    // code
  }
  @Input() alt = '';

  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // before render
    // No async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    // before render
    // cahnges inputs -- times
    console.log('ngOnchanges', 'imgValue =>', this.img);
    console.log('changes', changes);
    //  if(changes){
    // code
    //  }
  }

  ngOnInit(): void {
    // before render
    // async - fech -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
