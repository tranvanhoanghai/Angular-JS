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

@Component({
  selector: 'app-root',
  template: ` <h1>{{ title }}</h1>
    <app-hello
      [text]="title"
      (buttonClicked)="clickFromHello($event)"
    ></app-hello>
    <app-hi></app-hi>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
{
  title = 'angularDemo3';

  clickFromHello(event: any) {
    console.log('form hello', event);
    this.title = event;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(): void {
    //console.log('ngOnChanges');
  }
  ngOnDestroy(): void {
    //console.log('ngOnDestroy');
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
  }


}

// DataBinding
// 1. PropertyBinding
// 2. EvenBinding
// {{}} : String Interpolation (curly bracket)
