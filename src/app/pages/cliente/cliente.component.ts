import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalClienteComponent } from '../modal/modal-cliente/modal-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Cliente } from '../../model/cliente';
import { Endereco } from '../../model/endereco';

@Component({
  selector: 'vex-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nome', 'cpf', 'endereco', 'cep', 'numero', 'bairro', 'actions'];
  dataSource!: MatTableDataSource<Cliente>;
  clientes: Cliente[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  form: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.form = this.fb.group({
      filtro: [''],
      categoria: [''],
      status: ['']
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.clientes = [
      {
        nome: 'Angelica', telefone: '0500 2025 007', cpf: '255.444.444-41',
        endereco: new Endereco("Rua President kennedy", "39270096", 409, "Centro")
      },
      {
        nome: 'Maria', telefone: '0500 2025 014', cpf: '333.333.333-41',
        endereco: new Endereco("Rua 22", "39272-466", 400, "cidade jardim")
      },
      {
        nome: 'Angelica', telefone: '0500 2025 020', cpf: '222.222.222-22',
        endereco: new Endereco("Rua 19", "39272-462", 500, "cidade jardim")
      },
    ];
    this.dataSource = new MatTableDataSource(this.clientes);
  }

  modalCliente() {
    const dialogRef = this.dialog.open(ModalClienteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        let endereco = new Endereco()
        endereco.cep = result.cep
        endereco.bairro = result.bairro
        endereco.cidade = result.cidade
        endereco.complemento = result.complemento
        endereco.numero = result.numero
        endereco.uf = result.uf
        endereco.endereco = result.endereco
        result.endereco = endereco
        this.clientes.push(result)
        this.dataSource = new MatTableDataSource(this.clientes);
      }
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(cliente: Cliente) {
    let indiceRemover = this.clientes.indexOf(cliente);
    if (indiceRemover > -1) {
      this.clientes.splice(indiceRemover, 1);
      console.log("Delete depois do splice", this.clientes)
      this.dataSource = new MatTableDataSource(this.clientes)
    }
  }

}
