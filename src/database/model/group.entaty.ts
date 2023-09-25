/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Group {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    groupName: string
}