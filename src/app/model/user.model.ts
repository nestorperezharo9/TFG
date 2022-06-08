export class User {
    identifier: string;
    name: string;
    password: string;
    roles: Rol[];
}

export const enum Rol {
    ADMIN = 'ADMINISTRATOR',
    USER = 'USER'
}