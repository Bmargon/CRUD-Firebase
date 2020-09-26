import { Component, OnInit} from '@angular/core';
// servicio
import { CarnetsService } from 'src/app/services/carnets.service';
// interface
import { Carnet, Alumno} from 'src/app/interfaces/interfaces';
// forms
import {FormGroup , FormControl , Validators} from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
// router
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

// objetos
  carnets: Carnet[] = [];
  form: FormGroup;
  key;
  private alumno: Alumno = {
    nombreAlumno: {
      nombre: '',
      apellidoUno: '',
      apellidoDos: '',
  },
    sexo: '',
    nuevo: '',
    carnetAIniciar: ''
    };

  constructor( private carnetServicio: CarnetsService,
               private crud: CrudService,
               private active: ActivatedRoute,
               private router: Router) {
    this.carnets = this.carnetServicio.getCarnets();
      // url params
    this.active.params.subscribe( parametros => {
        this.key = parametros.id;
        console.log(this.key);
        if (this.key !== 'nuevo') {
          this.crud.getAlumno(this.key).subscribe( (data: Alumno) => {
            this.alumno = data;
            this.form.setValue(this.alumno);
          });
        }
      });

    // formulario
    this.form = new FormGroup({
      nombreAlumno: new FormGroup({
        nombre: new FormControl(this.alumno.nombreAlumno.nombre, [Validators.required, Validators.minLength(3),
                                                                                        Validators.maxLength(10)]),
        apellidoUno: new FormControl(this.alumno.nombreAlumno.apellidoUno, [Validators.required,
                                                                            Validators.minLength(3),
                                                                            Validators.maxLength(20)] ),
        apellidoDos: new FormControl(this.alumno.nombreAlumno.apellidoDos, [ Validators.required, Validators.minLength(3),
                                                                            Validators.maxLength(20)])
      }),
      sexo: new FormControl(this.alumno.sexo, [Validators.required]),
      nuevo: new FormControl(this.alumno.nuevo, [Validators.required]),
      carnetAIniciar: new FormControl(this.alumno.carnetAIniciar, [Validators.required])
      });

    }

    // submit
    guardar() {

      this.alumno.nombreAlumno.nombre = this.form.value.nombreAlumno.nombre;
      this.alumno.nombreAlumno.apellidoUno = this.form.value.nombreAlumno.apellidoUno;
      this.alumno.nombreAlumno.apellidoDos = this.form.value.nombreAlumno.apellidoDos;
      this.alumno.sexo = this.form.value.sexo;
      this.alumno.nuevo = this.form.value.nuevo;
      this.alumno.carnetAIniciar = this.form.value.carnetAIniciar;



      // update and create

      if (this.key === 'nuevo') {
        this.crud.crearAlumno(this.alumno).subscribe(data => {
          this.router.navigate(['/listado']);
          console.log(data.id);
        });
      } else {
        this.crud.actualizarAlumno(this.alumno, this.key).subscribe(data => console.log(data));
      }
    }

  nuevo() {
    this.form.reset();
    this.router.navigate(['/alumno', 'nuevo']);
  }
  ngOnInit() { }
}
