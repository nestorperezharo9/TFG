import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsFormComponent } from "./news/news-form/news-form.component";
import { NewsComponent } from "./news/news.component";


const routes: Routes = [
    {
        path: "",
        redirectTo: "news"
    },
    {
        path: "news",
        component: NewsComponent
    },
    {
        path: "news/create",
        component: NewsFormComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})
export class NewRoutingModule {}