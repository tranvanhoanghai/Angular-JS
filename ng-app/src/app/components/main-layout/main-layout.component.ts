import {AfterViewInit, Component, ElementRef, NgModule, OnInit, ViewChild} from '@angular/core';
import {MenuItem, SelectItemGroup} from "primeng/api";
interface City {
  name: string,
  code: string
}

interface Country {
  name: string,
  code: string
}
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})

export class MainLayoutComponent {
  items: MenuItem[];
  width: "250px";
  visibleSidebar: boolean = true;
  groupedCities: SelectItemGroup[];

  cities: City[];

  countries: Country[];

  selectedCity: City;

  selectedCountries: Country[];


  toggle() {
    this.visibleSidebar = !this.visibleSidebar;
  }



  ngOnInit() {
    this.items = [{
      label: 'Options',
      items: [{
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          console.log('Update')
        }
      },
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
            console.log('Delete')
          }
        }
      ]},
      {
        label: 'Navigate',
        items: [{
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
        },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
          }
        ]}
    ];
  }
}
