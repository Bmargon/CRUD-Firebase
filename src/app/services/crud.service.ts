import { Injectable } from '@angular/core';
// imports
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Alumno } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http: HttpClient) { }

  // vars
  urlAlumnoKey = 'https://recalde-bfe4c.firebaseio.com/Alumno/';
  urlAlumnoRaiz = 'https://recalde-bfe4c.firebaseio.com/Alumno.json';

  // nuevo alumno

  crearAlumno( alumno: Alumno ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = JSON.stringify(alumno);

    return this.http.post(this.urlAlumnoRaiz, body, {headers}).pipe(map( (data: any) => {
      console.log(data);
      return data;
    } ));

  }

  // obtener listado de alumnos

  listadoAlumnos() {
   return  this.http.get(this.urlAlumnoRaiz).pipe(map( data => data));
  }
  // obtener un solo alumno
  getAlumno( key: string ) {
    const url = `${this.urlAlumnoKey}${key}.json`;
    return this.http.get(url).pipe(map( data => {
      return data;
    }));
  }
  // delete

  deleteAlumno( key: string ) {
    return this.http.delete(`${this.urlAlumnoKey}${key}.json`).pipe(map( data => {
      return data;
    }));
  }

  // put - edicion

  actualizarAlumno(alumno, key) {
    const url = `${this.urlAlumnoKey}${key}.json`;
    const body = JSON.stringify(alumno);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(url, body, {headers}).pipe(map( data => {
      return data;
    }));
  }
}
