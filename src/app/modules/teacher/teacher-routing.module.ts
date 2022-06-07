import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TeachersComponent } from "./teachers/teachers.component";
import { FileTeacherComponent } from "./file-teacher/file-teacher.component";
import { StudentsComponent } from "./students/students.component";
import { TeachersFormComponent } from "./teachers/teachers-form/teachers-form.component";

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
        path: "students",
        component: StudentsComponent
    },
    {
        path: "teachers/:id",
        component: FileTeacherComponent
    },
    {
        path: "teachers/teacher/create",
        component: TeachersFormComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})
export class TeacherRoutingModule {}