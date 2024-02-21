import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from '../users/users.service'; // Import the UserService class



@Controller( 'users' )
export class UsersController {
    constructor( private userService: UsersService ) { } // Add a constructor to inject the UserService

    @Post( '/signup' )
    createUser( @Body() body: CreateUserDto ) {
        this.userService.create( body.email, body.password ); // Call the create method from the UserService
    }
}
