import { YourGuardGuard } from './your-guard.guard';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './components/hello/hello.component';
import { HiComponent } from './components/hi/hi.component';

const routes: Routes = [
  // { path: 'home', component: AppComponent },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },

  {
    path: 'first-component',
    component: HelloComponent,
    canActivate: [YourGuardGuard],
  },
  {
    path: 'second-component',
    component: HiComponent,
    children: [
      //Route home có thêm route con (url con)
      {
        path: 'second', //Truy cập vào url này sẽ là http://example.com/home/second/
        component: HelloComponent,
      },
    ],
  },

  // { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
