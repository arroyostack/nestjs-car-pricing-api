import { Body, Controller, Injectable, Post, Get, Patch, Param, Query, Delete } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from '../users/users.service'; // Import the UserService class
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { User } from './user.entity';



@Controller( 'users' )
export class UsersController {
    constructor( private userService: UsersService ) { } // Add a constructor to inject the UserService

    @Post( '/signup' )
    createUser( @Body() body: CreateUserDto ) {
        this.userService.create( body.email, body.password ); // Call the create method from the UserService
    }

    @Get( '/:id' )
    findUser( @Param( 'id' ) id: string ) {
        // This method return s one record or null.
        return this.userService.findOne( id );
    }

    @Get()
    findAllUsers( @Query( 'email' ) email: string ) {
        //  This method returns an arrays of records that math the search criteria.
        return this.userService.find( email );
    }

    @Delete( ':id' )
    removeUser( @Param( 'id' ) id: string ) {
        return this.userService.remove( parseInt( id ) );
    }

}
