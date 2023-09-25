/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class GroupDto {
    @IsNotEmpty({ message: 'groupName Is Not Empty' })
    groupName: string;
}