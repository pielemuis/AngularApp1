import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/user-list/user-list.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { ColumnsComponent } from './pages/columns/columns.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'user'},
  {path: 'user', pathMatch: 'full' , component: UserComponent},
  {path: 'product', pathMatch: 'full' , component: ProductComponent},
  {path: 'userlist', pathMatch: 'full' , component: ListComponent},
  {path: 'userlist/:userId', pathMatch: 'full', component: UserDetailComponent},
  {path: 'columns', component: ColumnsComponent, children: [{path: ':userId', pathMatch: 'full', component: UserDetailComponent}]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
