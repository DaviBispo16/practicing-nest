import { PrismaService } from "src/database/prisma.service";
import { randomUUID } from "crypto";
import { RocketMembersRepository } from "../members-repository";
import { Injectable } from "@nestjs/common";


@Injectable()
export class PrismaMembersRepository implements RocketMembersRepository {
    constructor(private prisma: PrismaService){}

    async create(name: string, memberFunction: string): Promise<void> {
        await this.prisma.teamMember.create({
            data: {
                id: randomUUID(),
                name,
                function: memberFunction
            }
        })
    }
}