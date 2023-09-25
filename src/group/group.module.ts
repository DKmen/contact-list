/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { GroupController } from "./group.controller";
import { GroupService } from "./group.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contact } from "src/database/model/contact.entaty";
import { Group } from "src/database/model/group.entaty";

@Module({
    imports: [TypeOrmModule.forFeature([Contact, Group])],
    providers: [GroupService],
    controllers: [GroupController]
})
export class GroupModule { }