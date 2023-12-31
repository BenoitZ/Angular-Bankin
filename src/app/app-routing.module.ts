import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { MyContactListComponent } from './pages/my-contact-list/my-contact-list.component';
import { MyTransactionsComponent } from './pages/my-transactions/my-transactions.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewTransactionsComponent } from './pages/new-transactions/new-transactions.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  // {
  //   path: "login/:someText",
  //   component: LoginComponent
  // },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "user",
    component: MainPageComponent,
    children: [
      {
        path: "dashboard",
        component: UserDashboardComponent
      },
      {
        path: "my-transactions",
        component: MyTransactionsComponent
      },
      {
        path: "my-contact-list",
        component: MyContactListComponent
      },
      {
        path: "new-transaction",
        component: NewTransactionsComponent
      },
      {
        path: "new-contact/:idContact",
        component: NewContactComponent
      },
      {
        path: "new-contact",
        component: NewContactComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "my-transactions",
        component: MyTransactionsComponent
      },
      {
        path: "",
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: "admin",
    component: MainAdminPageComponent,
    children: [
      {
        path: "customers",
        component: ManageUsersComponent
      },
      {
        path: "dashboard",
        component: AdminDashboardComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "",
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
