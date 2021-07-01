import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  form:FormGroup;
  usuario: Usuario;
  constructor(
    private formBuilder: FormBuilder,
    protected usuarioService: UsuarioService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    ) { 
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.usuarioService.buscarPorId(params.id)
      .subscribe(usuario=>{
        this.form.patchValue(usuario)
        this.usuario=usuario
      })
    })
    this.builForm()
  }

  updateUsuario(even:Event){
    even.preventDefault();
    if(this.form.valid){
      this.usuario.nombre=this.form.value.nombre
      this.usuario.identificacion=this.form.value.identificacion
      this.usuarioService.editar(this.usuario)
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
