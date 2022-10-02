import { ContainerModule, decorate, injectable, interfaces } from 'inversify';
import { Project } from 'ts-morph';

import { FamixImporter } from '../Services/FamixImporter';
import { Provider } from './Provider';

decorate(injectable(), Project);

export class ServiceProvider extends Provider {
    public static readonly register = (): ContainerModule =>
        new ContainerModule((bind) => {
            this.registerProject(bind);
            this.registerFamixImporter(bind);
        });

    private static readonly registerProject = (bind: interfaces.Bind) =>
        bind<Project>('Project').toConstantValue(new Project());

    private static readonly registerFamixImporter = (bind: interfaces.Bind) =>
        bind<FamixImporter>('FamixImporter').to(FamixImporter).inSingletonScope();
}
