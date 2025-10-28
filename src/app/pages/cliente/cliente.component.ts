import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalClienteComponent } from '../modal/modal-cliente/modal-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'vex-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nome', 'endereco', 'cep', 'numero', 'bairro', 'actions'];
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

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  modalCliente() {
    const dialogRef = this.dialog.open(ModalClienteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
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
}

