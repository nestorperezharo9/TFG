export interface Teacher {
    id: string;
    name: string;
    surnames: string;
    email: string;
    knowledgeArea: KnowledgeArea;
    category: Category;
    telephone: number;
    office: string;
    signatures: string[];
    staff: Staff;
}

export enum KnowledgeArea {
    "ARCHITECTURE" = "Arquitectura y Tecnología de Computadores",
    "COMP" = "Ciencia de la Computación e Inteligencia Artificial",
    "IDIOMS" = "Lenguajes y Sistemas Informáticos",
    "NONE" = "NONE"
}

export enum Category {
    "PROFESSOR" = "CATEDRATICO DE UNIVERSIDAD",
    "DOCTOR1" = "PROFESOR CONTRATADO DOCTOR, TIPO 1",
    "TITULAR" = "TITULAR DE UNIVERSIDAD",
    "TECHNICIAN" = "Técnico Especialista"
}

export enum Staff {
    "TEACHER" = "Personal Docente",
    "ADMIN" = "Personal de Administración y Servicios"
}