// Carnets

export interface Carnet {
    permiso: string;
}

export interface Alumno {
    nombreAlumno: {
        nombre: string;
        apellidoUno: string;
        apellidoDos?: string;
    };
    sexo: string;
    nuevo: string;
    carnetAIniciar: string;
}
