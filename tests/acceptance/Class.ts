import path from 'path';

import { kernel } from '../../app/Kernel';
import { FamixRepository } from '../../app/Services/FamixRepository';
import { RedTwig } from '../../app/Services/RedTwig';

describe('class', () => {
    const fixture = path.resolve(__dirname, '../fixtures/Entity.ts');

    const importer = kernel.get<RedTwig>('RedTwig');
    const repository = kernel.get<FamixRepository>('FamixRepository');

    beforeAll(() => {
        importer.import([fixture]);
    });

    it('should have a class', () => {
        const clazz = repository.getFamixClass('EntityClass');
        expect(clazz).toBeTruthy();
    });
});
