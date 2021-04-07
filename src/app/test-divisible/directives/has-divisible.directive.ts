import { Directive, Renderer2, ElementRef, OnDestroy, Input } from '@angular/core'
import { Subscription } from 'rxjs';
import { IRangeDivisible } from '../models/i-range-divisible';
import { DivisibleByService } from '../services/divisible-by.service';

@Directive({
  selector: '[appHasDivisible]'
})
export class HasDivisibleDirective implements OnDestroy {
  @Input() set range(range: IRangeDivisible) {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.proccess(range);
  };
  sub: Subscription;

  constructor(
    private renderer: Renderer2,
    private divisibleByService: DivisibleByService,
    private elementRef: ElementRef,
  ) {}

  /**
   * déclenche la génération d'une valeur qui est successivement incrémenté et comprise entre 2 valeurs
   * @param range
   */
  proccess(range: IRangeDivisible) {
    this.divisibleByService.startWith(range);
    this.sub = this.divisibleByService.getRangeValuesObs().subscribe((value: number) => {
      const message = this.divisibleByService.getMessageIsDivisible(value);

      this.addMessage(message);
    });
  }

  /**
   * ajoute une balise p contenant la chaine du message
   * @param message
   */
  addMessage(message: string) {
    if (message) {
      const p = this.renderer.createElement('p');
      const text = this.renderer.createText(message);

      this.renderer.appendChild(p, text);
      this.renderer.appendChild(this.elementRef.nativeElement, p);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
