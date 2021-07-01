import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from '../../shared/service/curso.service';

@Component({
  selector: 'app-curso-crear',
  templateUrl: './curso-crear.component.html',
  styleUrls: ['./curso-crear.component.css']
})
export class CursoCrearComponent implements OnInit {

  form:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    protected cursoService: CursoService,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    this.builForm()
  }

  saveCurso(even:Event){
    even.preventDefault();
    if(this.form.valid){
      this.cursoService.guardar(this.form.value)
      .subscribe(()=>{
        this.router.navigate(['/curso'])
      })
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
