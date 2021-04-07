import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { IRangeDivisible } from '../models/i-range-divisible';

@Injectable({
  providedIn: 'root',
})
export class DivisibleByService {

  private rangeValues: ReplaySubject<number>;

  /**
   * déclenche la génération d'une valeur qui est successivement incrémenté et comprise entre 2 valeurs
   * @param range - une plage de valeur
   */
  startWith(range: IRangeDivisible): void {
    this.rangeValues = new ReplaySubject<number>();
    for (let nb = range.begin; nb <= range.end; nb++) {
      this.rangeValues.next(nb);
    }
  }

  /**
   * retourne l'observable de la génération de valeur
   * @returns Observable
   */
  getRangeValuesObs(): Observable<number> {
    return this.rangeValues.asObservable();
  }

  /**
   * récupère la chaine qui correspond à une valeur donnée en entrée
   * @param value - la valeur
   * @returns string - le message
   */
  getMessageIsDivisible(value: number): string {
    const str = this.isGest(value) + this.isForm(value);
    return (str)? str : value.toString();
  }

  /**
   * retourne la chaine 'Form' si c'est la bonne valeur en entrée
   * @param value - une valeur
   * @returns string
   */
  isForm(value: number): string {
    if (this.isDivisibleBy5(value)) {
      return 'Form';
    }
    return '';
  }

  /**
   * retourne le message 'Gest' si c'est la bonne valeur en entrée
   * @param value - une valeur
   * @returns string
   */
  isGest(value: number): string {
    if (this.isDivisibleBy3(value)) {
      return 'Gest';
    }
    return '';
  }

  /**
   *
   * @param value détermine si une valeur est dibisible par 3
   * @returns boolean
   */
  isDivisibleBy3(value: number): boolean {
    return value % 3 === 0;
  }

  /**
   *
   * @param value détermine si une valeur est dibisible par 5
   * @returns boolean
   */
  isDivisibleBy5(value: number): boolean {
    return value % 5 === 0;
  }
}
