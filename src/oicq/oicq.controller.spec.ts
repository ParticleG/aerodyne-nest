import { Test, TestingModule } from '@nestjs/testing';
import { OicqController } from './oicq.controller';

describe('OicqController', () => {
  let controller: OicqController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OicqController],
    }).compile();

    controller = module.get<OicqController>(OicqController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
