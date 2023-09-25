/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get } from "@nestjs/common";
import { GroupService } from "./group.service";
import { GroupDto } from "./dto/group.dto";

@Controller('group')
export class GroupController {

    constructor(private groupService: GroupService) {
    }

    @Post()
    async addGroup(@Body() group: GroupDto) {
        return await this.groupService.createGroup(group);
    }

    // @Get(':id')
    // async getUserById(@Param() parms: FindUserDto) {
    //     return await this.userService.findUser(parms.id);
    // }

    // @Patch(':id')
    // async updateUserById(@Param() parms: FindUserDto, @Body() updateUser: UpdateUserDto) {
    //     return await this.userService.updateUser(parms.id, updateUser);
    // }

    @Get()
    async fetchGroup() {
        return await this.groupService.getAllGroup()
    }
}