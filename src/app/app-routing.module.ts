import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { ViewbookComponent } from './component/viewbook/viewbook.component';
import { ReaderComponent } from './component/reader/reader.component';
import { AuthorComponent } from './component/author/author.component';
import { GuestComponent } from './component/guest/guest.component';
import { SearchbookComponent } from './component/searchbook/searchbook.component';
import { BlockbookComponent } from './component/blockbook/blockbook.component';
import { RemovebookComponent } from './component/removebook/removebook.component';
import { UpdatepriceComponent } from './component/updateprice/updateprice.component';
import { AddbookComponent } from './component/addbook/addbook.component';
import { SubscribebookComponent } from './component/subscribebook/subscribebook.component';
import { UnsubscribebookComponent } from './component/unsubscribebook/unsubscribebook.component';
import { SignupComponent } from './component/signup/signup.component';
import { ViewsubscribedbooksComponent } from './component/viewsubscribedbooks/viewsubscribedbooks.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
const routes:Routes = [
 
  {path: "login", component: LoginComponent},
  {path: "viewbook", component: ViewbookComponent},
  {path: "reader", component: ReaderComponent},
  {path: "author", component: AuthorComponent},
  {path: "guest", component: GuestComponent},
  {path: "searchbook", component: SearchbookComponent},
  {path: "blockbook", component: BlockbookComponent},
  {path: "removebook", component: RemovebookComponent},
  {path: "updateprice", component: UpdatepriceComponent},
  {path: "addbook", component: AddbookComponent},
  {path: "subscribe", component: SubscribebookComponent},
  {path: "unsubscribe", component: UnsubscribebookComponent},
  {path: "signup", component: SignupComponent},
  {path: "view", component: ViewsubscribedbooksComponent},
  {path: "aboutus", component: AboutusComponent},
  
  {path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
