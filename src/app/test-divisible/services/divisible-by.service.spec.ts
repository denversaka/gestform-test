import { TestBed } from '@angular/core/testing';
import { DivisibleByService } from './divisible-by.service';
import { IRangeDivisible } from '../models/i-range-divisible';

describe('DivisibleByService', () => {
  let service: DivisibleByService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisibleByService);
  });


  it('est divisible par 3', () => {
    expect(service.isDivisibleBy3(3)).toEqual(true);
  });

  it('est divisible par 5', () => {
    expect(service.isDivisibleBy5(5)).toEqual(true);
  });

  it('n\'est pas divisible par 3', () => {
    expect(service.isDivisibleBy3(5)).toEqual(false);
  });

  it('n\'est pas divisible par 5', () => {
    expect(service.isDivisibleBy5(11)).toEqual(false);
  });

  //

  it('est "Gest"', () => {
    expect(service.isGest(30)).toEqual('Gest');
  });

  it('est "Form"', () => {
    expect(service.isForm(55)).toEqual('Form');
  });

  it('n\'est pas "Gest"', () => {
    expect(service.isGest(8)).toEqual('');
  });

  it('n\'est pas "Form"', () => {
    expect(service.isForm(89)).toEqual('');
  });

  //

  it('message = "Gest"', () => {
    expect(service.getMessageIsDivisible(12)).toEqual('Gest');
  });

  it('message = "Form"', () => {
    expect(service.getMessageIsDivisible(35)).toEqual('Form');
  });

  it('message = "GestForm"', () => {
    expect(service.getMessageIsDivisible(35)).toEqual('GestForm');
  });

  it('message = "112"', () => {
    expect(service.getMessageIsDivisible(112)).toEqual('112')
  });

  it('message = "76"', () => {
    expect(service.getMessageIsDivisible(76)).toEqual('76');
  });

});
