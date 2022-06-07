import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DirectiveComponent } from "./components/directive/directive.component";
import { KnowusComponent } from "./components/knowus/knowus.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "knowus"
    },
    {
        path: "knowus",
        component: KnowusComponent
    },
    {
        path: "",
        redirectTo: "directive"
    },
    {
        path: "directive",
        component: DirectiveComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})
export class TheDepartmentRoutingModule {}