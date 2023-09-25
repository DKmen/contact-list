/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Patch, Param } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ContactDto } from "./dto/country.dto";

@Controller('contact')
export class ContactController {

    constructor(private contactService: ContactService) {
    }

    @Post()
    async addContact(@Body() contact: ContactDto) {
        return await this.contactService.createContact(contact);
    }

    @Get(':id')
    async getUserById(@Param('id') groupId: string) {
        return await this.contactService.getContactAccordingGroup(groupId)
    }

    @Patch()
    async updateUserById(@Body() updateId: { contactId: string, groupId: string }) {
        return await this.contactService.assignGroup(updateId.contactId, updateId.groupId)
    }

    @Get()
    async fetchContact() {
        return await this.contactService.getAllContact()
    }
}