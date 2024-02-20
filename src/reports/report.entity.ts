import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    is: number;

    @Column()
    price: number;
}