import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';
import { CreateMemberTeamBody } from './dtos/create-team-member';
import { RocketMembersRepository } from './repositories/members-repository';


@Controller('app')
export class AppController {
  constructor(private rocketMemberRepository: RocketMembersRepository) {}

  @Get('hello')
  async getHello(@Body() body: CreateMemberTeamBody) {

    const {name, function: memberFunction} = body; 

    
    // const member = await this.prisma.teamMember.create({
      //   data : {
        //     id: randomUUID(),
        //     name,
        //     function: memberFunction
        //   }
        // })
        await this.rocketMemberRepository.create(name, memberFunction);
    }
}
