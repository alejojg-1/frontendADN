import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ClasePage } from '../page/clase/clase.po';

describe('Worksapace -project Usuario', ()=>{
    let page:AppPage;
    let navbar: NavbarPage;
    let clase: ClasePage;

    beforeEach(()=>{
        page = new AppPage();
        navbar = new NavbarPage();
        clase = new ClasePage();

    });

    it('Deberia listar clase', ()=>{
        page.navigateTo();
        navbar.clickBotonUsuarios();

        expect(0).toBe(clase.contarClases());
    });

    it('Debería crear un clase', ()=>{
        const ID_USUARIO=2;
        const ID_CURSO=3;
        const FECHA_INICIO='2020-06-27 10:00:00';
        const FECHA_FIN='2020-06-27 12:00:00';

        
        page.navigateTo();
        navbar.clickBotonClases();
        clase.clickBotonCrearClase();
        clase.ingreasarCrearIdUsuario(ID_USUARIO);
        clase.ingreasarCrearIdCurso(ID_CURSO);
        clase.ingreasarCrearFechaInicio(FECHA_INICIO);
        clase.ingreasarCrearFechaFin(FECHA_FIN)


        // Adicionar válidaciónes
    });

    it('Debería editar un clase', ()=>{
        const ID_USUARIO=2;
        const ID_CURSO=3;
        const FECHA_INICIO='2020-06-27 10:00:00';
        const FECHA_FIN='2020-06-27 12:00:00';

        page.navigateTo();
        navbar.clickBotonClases();
        clase.clickBotonEditarClase();
        clase.ingreasarEditarIdUsuario(ID_USUARIO);
        clase.ingreasarEditarIdCurso(ID_CURSO);
        clase.ingreasarEditarFechaInicio(FECHA_INICIO);
        clase.ingreasarEditarFechaFin(FECHA_FIN)
        // Adicionar válidaciones

    })


});