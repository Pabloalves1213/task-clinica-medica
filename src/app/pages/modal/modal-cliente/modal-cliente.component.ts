import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { stagger60ms } from '../../../../@vex/animations/stagger.animation';

@Component({
  selector: 'vex-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.scss'],
  animations: [stagger60ms, fadeInUp400ms],

})
export class ModalClienteComponent implements OnInit {
  form: FormGroup;

  constructor(private cd: ChangeDetectorRef, private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      cpf: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      cep: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
      descricao: [''],
      valor: ['', Validators.required],
      valorPromocional: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
