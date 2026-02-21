import { InjectRedis } from '@nestjs-modules/ioredis';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import Redis from 'ioredis';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    @InjectRedis() private readonly redis: Redis) { }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashed = await bcrypt.hash(password, saltRounds);
    return hashed;
  }

  async create(createUserDto: Prisma.UserCreateInput) {
    try {
      const { password } = createUserDto;

      const hashedPassword = await this.hashPassword(password)

      const input = { ...createUserDto, password: hashedPassword, profile: { create: {} } }

      return await this.prisma.user.create({ data: input })

    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async findAll(): Promise<Prisma.UserGetPayload<{ select: { id: true; email: true; profile: true } }>[]> {
    // const cache = await this.redis.get('users')
    // if (cache) return JSON.parse(cache)

    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        profile: true
      }
    });

    // await this.redis.set('users', JSON.stringify(users), 'EX', 300)
    return users
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      },
      select: {
        id: true,
        email: true,
        profile: true,
        chapterMember: {
          select: {
            chapter: true,
            chapterId: true,
            memberLevel: true,
            isActive: true,
            batchName: true,
            pruebaDate: true
          }
        },
        role: true,
        password: true
      },
    })

    if (!user) throw new NotFoundException("User not found!")

    return user
  }

  async findOne(id: number): Promise<Prisma.UserGetPayload<{ select: { id: true; email: true; profile: true; role: true } }>> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        profile: true,
        chapterMember: {
          select: {
            chapter: true,
            chapterId: true,
            memberLevel: true,
            isActive: true,
            batchName: true,
            pruebaDate: true
          }
        },
        role: true
      },
    });

    if (!user) throw new NotFoundException("User not found!");

    return user;
  }
}
