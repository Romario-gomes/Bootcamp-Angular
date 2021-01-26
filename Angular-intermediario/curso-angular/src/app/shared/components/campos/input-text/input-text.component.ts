import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'dio-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  
  constructor(public validacao: ValidarCamposService) { }

    get formControl(): AbstractControl {
      return this.formGroup.controls[this.controlName];
    }
  ngOnInit() {
  }

}
