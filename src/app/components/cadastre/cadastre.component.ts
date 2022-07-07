import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cadastro } from 'src/app/models/cadastro';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastre',
  templateUrl: './cadastre.component.html',
  styleUrls: ['./cadastre.component.css']
})
export class CadastreComponent implements OnInit {

  cadastro: Cadastro = {
    socialName:'',
    name:'',
    age: '',
    phone: '',
    email: '',
    gender: '',
    city: '',
    cpf: '',
    password: '',
    username: ''
  }

  socialName = new FormControl(null, Validators.minLength(3));
  name = new FormControl(null, Validators.minLength(10));
  age = new FormControl(null, Validators.minLength(1));
  phone = new FormControl(null, Validators.minLength(9));
  email = new FormControl(null, Validators.minLength(7));
  gender = new FormControl(null, Validators.minLength(3));
  city = new FormControl(null, Validators.minLength(3));
  cpf = new FormControl(null, Validators.minLength(11));
  password = new FormControl(null, Validators.minLength(5));
  username = new FormControl(null, Validators.minLength(2));

  constructor(
    private toast: ToastrService,
    private service: CadastroService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.cadastro).subscribe(resposta => {
    this.toast.success('Conta Criada!', 'Novo User');
    this.router.navigate(['login']);
    }, ex => {
      console.log(ex);
      this.toast.error(ex.error.error);
    })
  }
}
