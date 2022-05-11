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
    "TIC" = "TECNOLOGÍAS DE LA INFORMACIÓN",
    "IS" = "INGENIERÍA DEL SOFTWARE",
    "COMP" = "COMPUTACIÓN",
    "IC" = "INGENIERÍA DE COMPUTADORES",
    "NONE" = "NONE",
    "OPT" = "OPTATIVAS GENERALES (PROFUNDIZACIÓN CURRICULAR)"
}

export enum Department {
    "SYSTEMS" = "INFORMÁTICA Y SISTEMAS",
    "PHILOLOGY" = "FILOLOGÍA MODERNA, TRADUCCIÓN E INTERPRETACIÓN",
    "TELEFORMATION" = "TELEFORMACIÓN",
    "NONE" = ""
}

export enum SignatureType {
    "OBLIGATORY" = "OBLIGATORIA",
    "OPTIONAL" = "OPCIONAL",
    "BASIC" = "BASICA"
}

export enum SignatureCharacter {
    "SIGNATURE" = "ASIGNATURA",
    "PRACTICES" = "PRÁCTICAS EXTERNAS",
    "TFT" = "TRABAJO DE FIN DE TÍTULO"
}