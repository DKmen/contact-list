/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Group } from './group.entaty';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string

    @Column()
    secondName: string

    @Column()
    contact: string

    @Column()
    countryCode: string

    @ManyToOne(_ => Group)
    group: Group

}