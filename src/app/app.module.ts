import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './star/star.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CovertToSpacesPipe } from './pipe/covert-to-spaces.pipe';
import { HttpClient } from 'selenium-webdriver/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent, 
    WelcomeComponent, CovertToSpacesPipe    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
