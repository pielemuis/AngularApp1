import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { NavComponent } from './pages/shared/nav/nav.component';
import { UserComponent } from './pages/user/user.component';
import { ListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColumnsComponent } from './pages/columns/columns.component';

@NgModule({
  declarations: [
    //ng generate component --skip-tests=true pages/[NAAM] --inline-style
    AppComponent,
    NavComponent,
    FooterComponent,
    UserComponent,
    ProductComponent,
    ListComponent,
    UserDetailComponent,
    ColumnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
