import { Component, OnInit } from '@angular/core';
// servicio
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor( private crud: CrudService,
               private router: Router) {}
  // vars
  listadoAlumnos: any [] = [];
  loading = true;

  ngOnInit() {
    // obtener alumnos
    this.crud.listadoAlumnos().subscribe( (data: any) => {
      this.listadoAlumnos = data;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    });


  }
// delete
  borrar(key: any) {
    this.crud.deleteAlumno(key).subscribe( data => {
     if (data) {
       console.error(data);
     } else {
       delete this.listadoAlumnos[key];
     }
    });
  }


}
