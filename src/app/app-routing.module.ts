import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ContactComponent } from "./contact/contact.component";
import { RegisterComponent } from "./register/register.component";
import { UnsubscribeComponent } from "./unsubscribe/unsubscribe.component";
import { VpnComponent } from "./vpn/vpn.component";
import { DocumentComponent } from "./document/document.component";
import { LogoutComponent } from "./logout/logout.component";

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
        path: "logout",
        component: LogoutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "vpn",
        component: VpnComponent
    },
    {
        path: "document",
        component: DocumentComponent
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
        path: "theDepartment",
        loadChildren: () => import("./modules/theDepartment/theDepartment.module").then((m) => m.TheDepartmentModule)
    },
    {
        path: "new",
        loadChildren: () => import("./modules/new/new.module").then((m) => m.NewModule)
    },
    {
        path: "service",
        loadChildren: () => import("./modules/service/service.module").then((m) => m.ServiceModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {}