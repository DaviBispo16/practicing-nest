import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { RocketMembersRepository } from './repositories/members-repository';
import { PrismaMembersRepository } from './repositories/prisma/prisma-members-repository';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [ PrismaService,
  {
    provide: RocketMembersRepository,
    useClass: PrismaMembersRepository
  }
  ]
})
export class AppModule {}
