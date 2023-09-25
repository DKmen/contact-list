/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { ContactController } from "./contact.controller";
import { ContactService } from "./contact.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contact } from "src/database/model/contact.entaty";
import { Group } from "src/database/model/group.entaty";

@Module({
    imports: [TypeOrmModule.forFeature([Contact,Group])],
    providers: [ContactService],
    controllers: [ContactController]
})
export class ContactModule { }