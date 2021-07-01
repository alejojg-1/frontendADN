import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CursoPage } from '../page/curso/curso.po';

describe('Worksapace -project Usuario', ()=>{
    let page:AppPage;
    let navbar: NavbarPage;
    let curso: CursoPage;

    beforeEach(()=>{
        page = new AppPage();
        navbar = new NavbarPage();
        curso = new CursoPage();

    });

    it('Deberia listar cursos', ()=>{
        page.navigateTo();
        navbar.clickBotonUsuarios();

        expect(0).toBe(curso.contarCursos());
    });

    it('Debería crear un curso', ()=>{
        const NOMBRE_CURSO='Prueba funcional'
        const TIPO_CURSO='UNIVERSIDAD';
        const DESCRIPCION_CURSO="Esto es una prueba funcional"

        
        page.navigateTo();
        navbar.clickBotonCursos();
        curso.clickBotonCrearCurso();
        curso.ingreasarCrearNombreCurso(NOMBRE_CURSO);
        curso.ingreasarCrearTipoCurso(TIPO_CURSO);
        curso.ingreasarCrearDescripcionCurso(DESCRIPCION_CURSO)
        curso.clickGuardarCurso();

        // Adicionar válidaciónes
    });

    it('Debería editar un curso', ()=>{
        const NOMBRE_CURSO='Prueba funcional editando'
        const TIPO_CURSO='UNIVERSIDAD';
        const DESCRIPCION_CURSO="Esto es una prueba funcional"

        page.navigateTo();
        navbar.clickBotonCursos();
        curso.clickBotonEditarCurso();
        curso.ingreasarEditarNombreCurso(NOMBRE_CURSO);
        curso.ingreasarEditarTipoCurso(TIPO_CURSO);
        curso.ingreasarEditarDescripcionCurso(DESCRIPCION_CURSO)
        curso.clickEditarGuardarCurso();

        // Adicionar válidaciones

    })


});