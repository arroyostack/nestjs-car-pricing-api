import { Entity, Column, PrimaryGeneratedColumn, AfterInsert } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @AfterInsert()  // This will be called after the user is inserted.
    logInsert() {
        console.log( `User Inserted with id ${this.id}, and email ${this.email}` );
    }
}