export interface Room {
    id: string;
    name: string;
    description: string;
    picture: string;
    location: string;
    typeRoom: TypeRoom;
}

export enum TypeRoom {
    "LAB" = "LAB",
    "AULA" = "AULA"
}