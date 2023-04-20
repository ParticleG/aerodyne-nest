import { Test, TestingModule } from '@nestjs/testing';
import { OicqGateway } from './oicq.gateway';

describe('OicqGateway', () => {
  let gateway: OicqGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OicqGateway],
    }).compile();

    gateway = module.get<OicqGateway>(OicqGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
