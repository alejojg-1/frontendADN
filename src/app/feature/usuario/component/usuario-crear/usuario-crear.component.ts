import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent implements OnInit {

  @Input() usuario: Usuario
  form:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    protected usuarioService: UsuarioService,
    private router: Router
    ) { 
  }

  ngOnInit(): void {

    this.builForm()
  }

  saveUsuario(even:Event){
    even.preventDefault();
    if(this.form.valid){
      this.usuarioService.guardar(this.form.value)
      .subscribe(()=>{
        this.router.navigate(['/usuario'])
      })
    }

  }


  private builForm(){
    this.form= this.formBuilder.group({
      nombre: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
    })
  }





}

