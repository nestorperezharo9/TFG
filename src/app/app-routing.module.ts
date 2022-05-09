import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ContactComponent } from "./modules/contact/contact.component";
import { RegisterComponent } from "./register/register.component";
import { UnsubscribeComponent } from "./unsubscribe/unsubscribe.component";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: "home",
        loadChildren: () => import("./modules/home/home.module").then((m) => m.HomeModule)
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "unsubscribe",
        component: UnsubscribeComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "teaching",
        loadChildren: () => import("./modules/teaching/teaching.module").then((m) => m.TeachingModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {}