import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { ViewbookComponent } from './component/viewbook/viewbook.component';
import { AddbookComponent } from './component/addbook/addbook.component';
import { ButtonComponent } from './component/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { ReaderComponent } from './component/reader/reader.component';
import { AuthorComponent } from './component/author/author.component';
import { GuestComponent } from './component/guest/guest.component';
import { SearchbookComponent } from './component/searchbook/searchbook.component';
import { BlockbookComponent } from './component/blockbook/blockbook.component';
import { RemovebookComponent } from './component/removebook/removebook.component';
import { UpdatepriceComponent } from './component/updateprice/updateprice.component';
import { SubscribebookComponent } from './component/subscribebook/subscribebook.component';
import { UnsubscribebookComponent } from './component/unsubscribebook/unsubscribebook.component';
import { SignupComponent } from './component/signup/signup.component';
import { ViewsubscribedbooksComponent } from './component/viewsubscribedbooks/viewsubscribedbooks.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ViewbynameComponent } from './component/viewbyname/viewbyname.component';
import { ViewbyauthorComponent } from './component/viewbyauthor/viewbyauthor.component';
import { ViewbypublisherComponent } from './component/viewbypublisher/viewbypublisher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ViewbookComponent,
    AddbookComponent,
    ButtonComponent,
    ReaderComponent,
    AuthorComponent,
    GuestComponent,
    SearchbookComponent,
    BlockbookComponent,
    RemovebookComponent,
    UpdatepriceComponent,
    SubscribebookComponent,
    UnsubscribebookComponent,
    SignupComponent,
    ViewsubscribedbooksComponent,
    AboutusComponent,
    ViewbynameComponent,
    ViewbyauthorComponent,
    ViewbypublisherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
