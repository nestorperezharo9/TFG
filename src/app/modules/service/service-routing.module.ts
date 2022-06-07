import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FileRoomComponent } from "./components/file-room/file-room.component";
import { RoomsComponent } from "./components/rooms/rooms.component";
import { SecurityComponent } from "./components/security/security.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "rooms",
        pathMatch: "full"
    },
    {
        path: "rooms",
        component: RoomsComponent
    },
    {
        path: "security",
        component: SecurityComponent
    },
    {
        path: "rooms/:id",
        component: FileRoomComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})
export class ServiceRoutingModule {}