import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FetchAllInfoService } from './fetch-all-info.service';
import { ViewComponent } from './view/view.component';
import { FilterPipe } from './filter.pipe';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    FilterPipe,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'view/:option/:selection', component: ViewComponent },
      { path: '**', component: NotfoundComponent }
    ]),
    HttpClientModule,
    CommonModule
  ],
  providers: [FetchAllInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
