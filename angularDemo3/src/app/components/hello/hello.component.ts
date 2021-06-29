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
export class HelloComponent implements OnInit {
  constructor(private _dataService: DataService) {}

  @Input() text: any;

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  // title = 'angularDemo3';
  a = 'green';
  b = true;
  hide = 'hide';
  show = 'show';

  buttonClick() {
    // this.b = !this.b;
    this.text = 'aaaaaaaaaaaaaa';
  }

  buttonClick1() {
    this.text = 'from hello btn click';
    this.buttonClicked.emit(this.text);
    this._dataService.setTextFromHello(this.text);
  }

  ngOnInit(): void {
    this._dataService.setTextFromHello(this.text);
  }
}
