import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Clase } from '../model/clase.model';

import { ClaseService } from './clase.service';

describe('ClaseService', () => {
  let httpMock : HttpTestingController;
  let service: ClaseService;
  const apiEndpointClasesConsulta= `${environment.url_api}/agendas`;
  const apiEndPointClases= `${environment.url_api}/agendas`

  beforeEach(() => {
    const injector=TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClaseService, HttpService]
    })
    httpMock= injector.inject(HttpTestingController);
    service= TestBed.inject(ClaseService);
  });

  it('should be created', () => {
    const claseService:ClaseService=TestBed.inject(ClaseService);
    expect(claseService).toBeTruthy();
  });

  it('deberia de listar clases',()=>{
    const dummyClases=[
      new Clase(1,1,1,new Date(Date.now()),new Date(Date.now()),10000),
      new Clase(2,1,1,new Date(Date.now()),new Date(Date.now()),15000),
    ];
    service.consultar().subscribe(cursos =>{
      expect(cursos.length).toBe(2);
      expect(cursos).toEqual(dummyClases)
    });
    const req = httpMock.expectOne(`${apiEndpointClasesConsulta}/`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyClases);
  });

  it('deberia crear un clase', () => {
    const dummyCurso =new Clase(2,1,1,new Date(Date.now()),new Date(Date.now()),15000);
    service.guardar(dummyCurso).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndPointClases}/`);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('debería eliminar un clase',()=>{
    new Clase(1,1,1,new Date(Date.now()),new Date(Date.now()),15000);
    service.eliminar(1).subscribe((respuesta)=>{
      expect(respuesta).toEqual(true)
    });
    const req =httpMock.expectOne(`${apiEndPointClases}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body:true}))
  });
  it('debería editar un clase',()=>{
   const dummyClase=new Clase(1,1,1,new Date(Date.now()),new Date(Date.now()),15000);
    service.editar(dummyClase).subscribe((respuesta)=>{
      expect(respuesta).toEqual(true)
    });
    const req =httpMock.expectOne(`${apiEndPointClases}/1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body:true}))
  });
});
