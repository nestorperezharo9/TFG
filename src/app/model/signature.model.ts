export interface Signature {
    id: string;
    courseId: string;
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
    "DOCTORATE" = "DOCTORADO",
    "OPT" = "OPTATIVAS GENERALES (PROFUNDIZACIÓN CURRICULAR)"
}

export enum Department {
    "SYSTEMS" = "INFORMÁTICA Y SISTEMAS",
    "PHILOLOGY" = "FILOLOGÍA MODERNA, TRADUCCIÓN E INTERPRETACIÓN",
    "TELEFORMATION" = "TELEFORMACIÓN",
    "PROCESS" = "INGENIERÍA DE PROCESOS",
    "CIVIL" = "INGENIERÍA CIVIL",
    "COMUNICATIONS" = "COMUNICATIONS",
    "ELECTRONIC" = "INGENIERÍA ELECTRÓNICA Y AUTOMÁTICA",
    "ECONOMY" = "ECONOMÍA Y DIRECCIÓN DE EMPRESAS",
    "TELEMATICS" = "INGENIERÍA TELEMÁTICA",
    "PHYSICAL" = "FÍSICA",
    "NONE" = "NONE"
}

export enum SignatureType {
    "OBLIGATORY" = "Obligatoria",
    "OPTIONAL" = "Opcional",
    "BASIC" = "Básica"
}

export enum SignatureCharacter {
    "SIGNATURE" = "Asignatura",
    "PRACTICES" = "Prácticas Externas",
    "TFT" = "Trabajo de Fin de Título"
}