import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { stagger60ms } from '../../../../@vex/animations/stagger.animation';
import { ClienteService } from '../../../model/cliente.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'vex-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.scss'],
  animations: [stagger60ms, fadeInUp400ms],

})
export class ModalClienteComponent implements OnInit {
  form: FormGroup;
  erro: string | null = null;

  constructor(private cd: ChangeDetectorRef, private fb: FormBuilder, private clienteService: ClienteService, private readonly dialogRef: MatDialogRef<ModalClienteComponent>) {
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
      complemento: [''],
    });
  }

  buscarCep() {
    const cep = this.form.get('cep')?.value;
    if (!cep) return;

    if (!cep) return;

    this.clienteService.buscarCep(cep).subscribe({
      next: (dados) => {
        if (dados.erro) {
          alert("CEP não encontrado")
          // this.erro = 'CEP não encontrado.';
          this.form.patchValue({
            logradouro: '',
            bairro: '',
            localidade: '',
            uf: ''
          });
        } else {
          this.erro = null;
          this.form.patchValue({
            endereco: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            uf: dados.uf
          });
        }
      },
      error: () => {
        alert('Erro ao consultar o CEP')
        // this.erro = 'Erro ao consultar o CEP.';
      }
    });
  }

  cadastrar() {
    this.dialogRef.close(this.form?.value)
  }

  ngOnInit(): void {
  }

}
