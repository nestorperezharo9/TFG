import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DegreesFormComponent } from "./components/degrees/degrees-form/degrees-form.component";
import { DegreesComponent } from "./components/degrees/degrees.component";
import { DoctoratesFormComponent } from "./components/doctorates/doctorates-form/doctorates-form.component";
import { DoctoratesComponent } from "./components/doctorates/doctorates.component";
import { MastersFormComponent } from "./components/masters/masters-form/masters-form.component";
import { MastersComponent } from "./components/masters/masters.component";
import { SignaturesComponent } from "./components/signatures/signatures.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "degrees"
    },
    {
        path: "degrees",
        component: DegreesComponent
    },
    {
        path: "degrees/create",
        component: DegreesFormComponent
    },
    {
        path: "",
        redirectTo: "masters"
    },
    {
        path: "masters",
        component: MastersComponent
    },
    {
        path: "masters/create",
        component: MastersFormComponent
    },
    {
        path: "",
        redirectTo: "doctorates"
    },
    {
        path: "doctorates",
        component: DoctoratesComponent
    },
    {
        path: "doctorates/create",
        component: DoctoratesFormComponent
    },
    {
        path: "signatures/:id",
        component: SignaturesComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})
export class TeachingRoutingModule {}