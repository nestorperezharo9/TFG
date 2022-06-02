import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsComponent } from "./news/news.component";


const routes: Routes = [
    {
        path: "",
        redirectTo: "news"
    },
    {
        path: "news",
        component: NewsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})
export class NewRoutingModule {}