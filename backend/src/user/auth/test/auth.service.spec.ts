import { AuthService } from "../signup-service";
import { PrismaService } from "../../../../prisma/prisma/prisma.service";
import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';


describe('Authenticate User Controller', () => {
  let authService: AuthService;
  let prisma: PrismaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        PrismaService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue('mockAccessToken'),
            verify: jest.fn(),
          },
        },
      ],
    }).compile();
    authService = module.get<AuthService>(AuthService);
    prisma = module.get(PrismaService);
  });
  it('It need signup new user', async () => {
    prisma.user.findUnique = jest.fn().mockResolvedValue(null);
    prisma.user.create = jest.fn().mockResolvedValue({id:1});
    const result = await authService.register({
      email: 'test@example.com',
      password: 'mypassword',
      name: 'Test',
      surname: "tt",
      permission:1,
      phone: '+1234567890',
    });

    expect(result).toEqual({ message: 'Регистрация успешна', user:{id:1}});
    expect(prisma.user.create).toHaveBeenCalled();

  });
  it('❌ Должен выдать ошибку, если email уже занят', async () => {
    prisma.user.findUnique = jest.fn().mockResolvedValue({ id: 1 });

    await expect(
      authService.register({
        email: 'test@example.com',
        password: 'mypassword',
        surname: "tt",
        permission:1,
        name: 'Test',
        phone: '+1234567890',
      }),
    ).rejects.toThrow(BadRequestException);
  });
})