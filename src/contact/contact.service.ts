/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Equal, Repository } from 'typeorm';
import { ContactDto } from './dto/country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from 'src/database/model/contact.entaty';
import { Group } from 'src/database/model/group.entaty';

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,
        @InjectRepository(Group)
        private groupRepository: Repository<Group>
    ) { }

    async createContact(newContact: ContactDto) {
        let contact = new Contact();
        Object.keys(newContact).map((key) => {
            contact[key] = newContact[key];
        });
        contact = await this.contactRepository.save(contact);
        return {
            contact
        };
    }

    async getAllContact() {
        return {
            contacts: await this.contactRepository.find()
        }
    }

    async assignGroup(contactId: string, groupId: string) {
        const contact = await this.contactRepository.findOne({ where: { id: Equal(contactId) } });
        const group = await this.groupRepository.findOne({ where: { id: Equal(groupId) } });
        contact.group = group;
        return {
            contact: await this.contactRepository.save(contact)
        }
    }

    async getContactAccordingGroup(groupId: string) {
        return {
            contacts: await this.contactRepository.find({ where: { group: { id: Equal(groupId) } } })
        }
    }
}
