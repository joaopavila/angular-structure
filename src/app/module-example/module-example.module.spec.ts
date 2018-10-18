import { ModuleExampleModule } from './module-example.module';

describe('ModuleExampleModule', () => {
  let moduleExampleModule: ModuleExampleModule;

  beforeEach(() => {
    moduleExampleModule = new ModuleExampleModule();
  });

  it('should create an instance', () => {
    expect(moduleExampleModule).toBeTruthy();
  });
});
