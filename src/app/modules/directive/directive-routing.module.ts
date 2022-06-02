import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DirectiveComponent } from "./directive/directive.component";


const routes: Routes = [
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
export class DirectiveRoutingModule {}