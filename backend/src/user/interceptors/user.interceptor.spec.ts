import { Test, TestingModule } from '@nestjs/testing';
import { UserInterceptor } from './user.interceptor';

describe('UserInterceptor', () => {
  let interceptor: UserInterceptor;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserInterceptor],
    }).compile();

    interceptor = module.get<UserInterceptor>(UserInterceptor);
  });

  it('should be defined', () => {
    expect(new UserInterceptor()).toBeDefined();
  });

  it('should', () => {
    expect(true).toBe(true);
  });
});
