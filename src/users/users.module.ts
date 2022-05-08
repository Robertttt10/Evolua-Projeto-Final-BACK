
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common/decorators';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  exports:[TypeOrmModule,UsersService],
  providers: [UsersService, JwtStrategy]
})
export class UsersModule {}
