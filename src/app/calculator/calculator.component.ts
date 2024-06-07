import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})

export class CalculatorComponent {
  tipInputForm!: FormGroup;
  billInput!: number;
  selectedTipInput!: number;
  customTipInput!: number;
  personInput!: number;
  isBillZero: boolean = false;
  isPersonZero: boolean = false;
  selectedTip: number | null = null;
  isClicked: boolean = false;

  selectTip(tip: number) {
    this.selectedTipInput = tip;
    this.selectedTip = tip;
    this.isValidInputZero();
  }

  get tipPerPerson(): number {
    if (this.personInput > 0 && this.billInput > 0) {
      if (this.selectedTipInput > 0) {
        return ((this.billInput * this.selectedTipInput) / 100) / this.personInput;
      } else if (this.customTipInput > 0) {
        return ((this.billInput * this.customTipInput) / 100) / this.personInput;
      }
    }
    return 0;
  }

  get totalPerPerson(): number {
    if (this.personInput > 0 && this.billInput > 0) {
      if (this.selectedTipInput > 0) {
        return (((this.billInput * this.selectedTipInput) / 100) + this.billInput) / this.personInput;
      } else if (this.customTipInput > 0) {
        return (((this.billInput * this.customTipInput) / 100) + this.billInput) / this.personInput;
      }
    }
    return 0;
  }

  isValidInputZero(): void {
    this.isBillZero = this.billInput === 0;
    this.isPersonZero = this.personInput === 0;
  }

  reset(): void {
    this.billInput = 0;
    this.selectedTipInput = 0;
    this.customTipInput = 0;
    this.personInput = 0;
    this.isBillZero = false;
    this.isPersonZero = false;
    this.selectedTip = null;
    this.isClicked = !this.isClicked;
  }
}
