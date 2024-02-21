import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from 'typeorm';

// Note: The log hooks can be called only if an instance of the entity is created and then saved using the save method. 
// If you skipt the first step and pass a plain object to the save method, the hooks will not be called.
// This code can be seen in "user.service" file in the "create" method of the User.

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
        console;
    }
    @AfterUpdate()  // This will be called after the user is updated.
    logUpdate() {
        console.log( `User updated with id ${this.id}, and email ${this.email}` );
    }
    @AfterRemove()  // This will be called after the user is removed.
    logRemove() {
        console.log( `User removed with id ${this.id}, and email ${this.email}` );
    }
}