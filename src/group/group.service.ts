/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GroupDto } from './dto/group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from 'src/database/model/group.entaty';

@Injectable()
export class GroupService {
    constructor(
        @InjectRepository(Group)
        private groupRepository: Repository<Group>
    ) { }

    async createGroup(newGroup: GroupDto) {
        let group = new Group();
        Object.keys(newGroup).map((key) => {
            group[key] = newGroup[key];
        });
        group = await this.groupRepository.save(group);
        return {
            group
        };
    }

    async getAllGroup() {
        return {
            groups: await this.groupRepository.find()
        }
    }
}
