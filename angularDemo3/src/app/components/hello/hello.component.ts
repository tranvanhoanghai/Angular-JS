import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
{
  constructor(private _dataService: DataService) {}

  @Input() text: any;

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  buttonClick1() {
    this.text = 'from helo';
    this.buttonClicked.emit(this.text);
    this._dataService.setTextFromHello(this.text);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this._dataService.setTextFromHello(this.text);
  }
  ngOnChanges(): void {
    //console.log('ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterViewInit(): void {
    //console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    //console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(): void {
    //console.log('ngAfterViewChecked');
  }

  title = 'angularDemo3';
  a = 'green';
  b = true;
  hide = 'hide';
  show = 'show';
  buttonClick() {
    this.b = !this.b;
    this.text = 'aaaaaaaaaaaaaa';
  }
}
