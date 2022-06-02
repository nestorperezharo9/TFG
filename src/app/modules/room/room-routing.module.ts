import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoomsComponent } from "./rooms/rooms.component";


const routes: Routes = [
    {
        path: "",
        redirectTo: "rooms"
    },
    {
        path: "rooms",
        component: RoomsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})
export class RoomRoutingModule {}