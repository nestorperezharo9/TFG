export interface Signature {
    id: string;
    degreeId: string;
    code: number;
    name: string;
    plan: number;
    specialty: Specialty;
    school: string;
    department: Department;
    type: SignatureType;
    character: SignatureCharacter;
    duration: number;
    credits: number;
    course: number;
    teachingProject: string;
}

export enum Specialty {
    "TIC" = "FUNDAMENTOS EN TECNOLOGÍAS DE LOS SISTEMAS DE INFORMACIÓN",
    "NONE" = "NONE"
}

export enum Department {
    "SYSTEMS" = "INFORMATICA Y SISTEMAS",
    "PHILOLOGY" = "FILOLOGÍA MODERNA, TRADUCCIÓN E INTERPRETACIÓN"
}

export enum SignatureType {
    "OBLIGATORY" = "OBLIGATORIA",
    "OPTIONAL" = "OPCIONAL",
    "BASIC" = "BASICA"
}

export enum SignatureCharacter {
    "SIGNATURE" = "ASIGNATURA",
    "PRACTICES" = "PRACTICAS EXTERNAS",
    "TFT" = "TRABAJO FIN DE TITULO"
}