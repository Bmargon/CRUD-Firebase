import { Injectable } from '@angular/core';
import { Carnet } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarnetsService {

  constructor() { }

  private Carnets: Carnet[] = [
    {permiso: 'Nunguno'},
    {permiso: 'AM'},
    {permiso: 'A1'},
    {permiso: 'A2'},
    {permiso: 'A'},
    {permiso: 'B'},
    {permiso: 'BTP'},
    {permiso: 'C1'},
    {permiso: 'C'},
    {permiso: 'D'},
    {permiso: 'D1'},
    {permiso: 'E'}

  ];

  getCarnets() {
    return this.Carnets;
  }
}
