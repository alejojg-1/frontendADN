import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router,Params} from '@angular/router';
import { Clase } from '../../shared/model/clase.model';
import { ClaseService } from '../../shared/service/clase.service';

@Component({
  selector: 'app-clase-editar',
  templateUrl: './clase-editar.component.html',
  styleUrls: ['./clase-editar.component.css']
})
export class ClaseEditarComponent implements OnInit {

  form: FormGroup;
  clase: Clase;
  constructor(
    private formBuilder: FormBuilder,
    protected claseService: ClaseService,
    private router: Router,
    private activeRoute: ActivatedRoute
    ) { 
      this.builForm()
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.claseService.buscarPorId(params.id)
      .subscribe(clase=>{
        this.form.patchValue(clase);
        this.clase=clase;
      })
    })
  }

  updateClase(even:Event){
    even.preventDefault();
    if(this.form.valid){
      this.clase.idUsuario=this.form.value.idUsuario;
      this.clase.idCurso=this.form.value.idCurso;
      this.clase.fechaInicio=this.form.value.fechaInicio;
      this.clase.fechaFin=this.form.value.fechaFin;
      this.claseService.editar(this.clase)
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
