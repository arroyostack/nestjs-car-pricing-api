import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor( @InjectRepository( User ) private repo: Repository<User> ) { }

    // Repository exist within the TypeORM library and is used to interact with the database.
    create( email: string, password: string ) {
        const user = this.repo.create( {
            email,
            password,
        } );

        return this.repo.save( user );
    }
}
