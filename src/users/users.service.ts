import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor( @InjectRepository( User ) private repo: Repository<User> ) { }
    // Repository exist within the TypeORM library and is used to interact with the database.

    create( email: string, password: string ): Promise<User> {
        // Note: The log hooks can be called only if an instance of the entity is created and then saved using the save method. 
        // If you skipt the first step and pass a plain object to the save method, the hooks will not be called.
        //  This can lead to several bugs quickly.
        // This code can be seen in "user.service" file in the "create" method of the User.
        const user = this.repo.create( {
            email,
            password,
        } );

        return this.repo.save( user );
    }

    findOne( id: string ): Promise<User | undefined> {
        // This method return s one record or null.
        return this.repo.findOne( { where: { id: parseInt( id ) } } );
    }

    find( email: string ): Promise<User[]> {
        // This method returns an arrays of records that math the serach criteria.
        // If no found, it returns an empty array.
        return this.repo.find( { where: { email: email } } );
    }

    // In this case Typescript 'partials' allow to accept a partial object of the User entity. 
    // If one or more properties are missing, the method will still work.
    async update( id: string, attrs: Partial<User> ): Promise<User> {
        // Duplicated code in the function bellow.
        const user = await this.repo.findOne( { where: { id: parseInt( id ) } } );
        if ( !user ) {
            throw new Error( 'User not found' );
        };

        Object.assign( user, attrs );

        return this.repo.save( user );
    }

    async remove( id: number ) {
        const user = await this.repo.findOne( { where: { id: id } } );
        if ( !user ) {
            throw new Error( 'User not found' );
        };
        return this.repo.remove( user );
    }


}
