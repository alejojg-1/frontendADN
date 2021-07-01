import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkUsuarios = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkCursos = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkClases = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));



    async clickBotonUsuarios() {
        await this.linkUsuarios.click();
    }
    async clickBotonCursos() {
        await this.linkCursos.click();
    }
    async clickBotonClases() {
        await this.linkClases.click();
    }

}
