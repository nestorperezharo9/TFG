import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminsComponent } from "./admins/admins.component";
import { TeachersComponent } from "./teachers/teachers.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "teachers",
        pathMatch: "full"
    },
    {
        path: "teachers",
        component: TeachersComponent
    },
    {
        path: "admins",
        component: AdminsComponent
    },
    {
        path: "teachers/:staff",
        component: TeachersComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})
export class TeacherRoutingModule {}