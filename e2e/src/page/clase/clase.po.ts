import { by, element } from 'protractor';

export class ClasePage{
    private linkCrearClase= element(by.css('app-clase-listar #linkCrearCurso'));
    private linkGuardarCLase=element(by.css('app-clase-crear #linkGuardarCLase'));
    private inputIdUsuarioClase= element(by.css('app-clase-crear #inputIdUsuarioClase'));
    private inputIdCursoClase= element(by.css('app-clase-crear #inputIdCursoClase'));
    private inputFechaInicioClase= element(by.css('app-clase-crear #inputFechaInicioClase'));
    private inputFechaFinClase= element(by.css('app-clase-crear #inputFechaFinClase'));
    private linkCancelarGuardarClase=element(by.id('linkCancelarGuardarClase'));

    private linkEditarClase=element(by.css('app-clase-listar #linkEditarClase'));
    private linkEditarGuardarCLase=element(by.id('app-editar-clase #linkEditarGuardarCLase'));
    private inputEditarIdUsuarioClase= element(by.css('app-clase-crear #inputEditarIdUsuarioClase'));
    private inputEditarIdCursoClase= element(by.css('app-clase-crear #inputEditarIdCursoClase'));
    private inputEditarFechaInicioClase= element(by.css('app-clase-crear #inputEditarFechaInicioClase'));
    private inputEditarFechaFinClase= element(by.css('app-clase-crear #inputEditarFechaFinClase'));
    private linkEditarCancelarGuardarClase=element(by.css('app-editar-clase #linkEditarCancelarGuardarClase'));

    private listaClases =element(by.id('listaClases'))

    async clickBotonCrearClase(){
        await this.linkCrearClase.click();
    };

    async clickGuardarClase(){
        await this.linkGuardarCLase.click();
    }

    async clickCancelarGuardarClase(){
        await this.linkCancelarGuardarClase.click();
    }

    async ingreasarCrearIdUsuario(idUsuario){
        await this.inputEditarIdUsuarioClase.sendKeys(idUsuario);
    }

    async ingreasarCrearIdCurso(idCurso){
        await this.inputIdCursoClase.sendKeys(idCurso);
    }

    async ingreasarCrearFechaInicio(fechaInicio){
        await this.inputFechaInicioClase.sendKeys(fechaInicio);
    }

    async ingreasarCrearFechaFin(fechaFin){
        await this.inputFechaFinClase.sendKeys(fechaFin);
    }



    async clickBotonEditarClase(){
        await this.linkEditarClase.click();
    };

    async clickEditarGuardarClase(){
        await this.linkEditarGuardarCLase.click();
    }

    async clickCancelarEditarGuardarClase(){
        await this.linkEditarCancelarGuardarClase.click();
    }

    async ingreasarEditarIdUsuario(idUsuario){
        await this.inputIdUsuarioClase.sendKeys(idUsuario);
    }

    async ingreasarEditarIdCurso(idCurso){
        await this.inputEditarIdCursoClase.sendKeys(idCurso);
    }

    async ingreasarEditarFechaInicio(fechaInicio){
        await this.inputEditarFechaInicioClase.sendKeys(fechaInicio);
    }

    async ingreasarEditarFechaFin(fechaFin){
        await this.inputEditarFechaFinClase.sendKeys(fechaFin);
    }

    async contarClases(){
        return this.listaClases.count();
    }


}