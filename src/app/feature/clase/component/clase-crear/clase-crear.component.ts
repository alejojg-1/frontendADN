import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClaseService } from '../../shared/service/clase.service';

@Component({
  selector: 'app-clase-crear',
  templateUrl: './clase-crear.component.html',
  styleUrls: ['./clase-crear.component.css']
})
export class ClaseCrearComponent implements OnInit {

  form:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    protected claseService: ClaseService,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    this.builForm()
  }

  saveClase(even:Event){
    even.preventDefault();
    if(this.form.valid){
      this.claseService.guardar(this.form.value)
      .subscribe(()=>{
        this.router.navigate(['/clase'])
      })
    }

  }


  private builForm(){
    this.form= this.formBuilder.group({
      idUsuario: ['', [Validators.required]],
      idCurso: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin:['', [Validators.required]],
    })
  }

}
