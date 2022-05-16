import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DegreesComponent } from "./components/degrees/degrees.component";
import { DoctoratesComponent } from "./components/doctorates/doctorates.component";
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
        path: "",
        redirectTo: "masters"
    },
    {
        path: "masters",
        component: MastersComponent
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
        path: "signatures/:id",
        component: SignaturesComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})
export class TeachingRoutingModule {}