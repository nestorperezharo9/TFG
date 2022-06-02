import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KnowusComponent } from "./knowus/knowus.component";
import { LoginComponent } from "./login/login.component";
import { ContactComponent } from "./modules/contact/contact.component";
import { RegisterComponent } from "./register/register.component";
import { SecurityComponent } from "./security/security.component";
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
        path: "knowus",
        component: KnowusComponent
    },
    {
        path: "security",
        component: SecurityComponent
    },
    {
        path: "teaching",
        loadChildren: () => import("./modules/teaching/teaching.module").then((m) => m.TeachingModule)
    },
    {
        path: "teacher",
        loadChildren: () => import("./modules/teacher/teacher.module").then((m) => m.TeacherModule)
    },
    {
        path: "directive",
        loadChildren: () => import("./modules/directive/directive.module").then((m) => m.DirectiveModule)
    },
    {
        path: "new",
        loadChildren: () => import("./modules/new/new.module").then((m) => m.NewModule)
    },
    {
        path: "room",
        loadChildren: () => import("./modules/room/room.module").then((m) => m.RoomModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {}