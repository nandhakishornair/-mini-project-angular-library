import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { SigninComponent } from './signin/signin.component';
import { UpdateComponent } from './update/update.component';
// authguard added
import { AuthGuard } from './auth.guard';

import { ViewComponent } from './view/view.component';

const routes: Routes = [{path:'',component:ViewComponent},
{path:"login",component:LoginComponent},
{path:"addbook",canActivate: [AuthGuard],component:AddComponent},
{path:"update",component: UpdateComponent},
{path:"Signin",component:SigninComponent},
{path:"update",component:UpdateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
