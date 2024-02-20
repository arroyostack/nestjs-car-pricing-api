# Refactor Summary

## Step 1: Install TypeORM

TypeORM, a powerful ORM for TypeScript and JavaScript, was installed.

## Step 2: Import TypeORM in App Module

TypeORM was imported into the app module using the `forRoot()` configuration. This configuration includes the database type, database name, entities, and synchronization settings.

````typescript
@Module({
  imports: [UsersModule, ReportsModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})```

Step 3: Create User Entity
A new entity, User, was created with id, email, and password fields. This entity maps the User object to a database table.
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;
}

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController]
})

Step 4: Import User Entity in User Module
The User entity was imported into the User module and added to the module's imports.

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController]
})

step 5: import User entity in AppModule.
````
