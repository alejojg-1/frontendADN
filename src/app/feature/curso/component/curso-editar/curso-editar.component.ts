import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Curso } from '../../shared/model/curso.model';
import { CursoService } from '../../shared/service/curso.service';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css']
})
export class CursoEditarComponent implements OnInit {

  form:FormGroup;
  curso:Curso;
  constructor(
    private formBuilder: FormBuilder,
    protected cursoService: CursoService,
    private router: Router,
    private activeRoute: ActivatedRoute
    ) { 
      this.builForm()

  }
  

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.cursoService.buscarPorId(params.id)
      .subscribe(curso=>{
        this.form.patchValue(curso);
        this.curso=curso;
      })
    })

  }

  updateCurso(even:Event){
    even.preventDefault();
    if(this.form.valid){
      this.curso.nombre=this.form.value.nombre;
      this.curso.tipo=this.form.value.tipo;
      this.curso.descripcion=this.form.value.descripcion;
      this.cursoService.editar(this.curso)
      .subscribe(()=>{
        this.router.navigate(['/curso'])
      });
    }

  }


  private builForm(){
    this.form= this.formBuilder.group({
      nombre: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    })
  }

}
