import { IsNotEmpty, IsOptional, IsUUID, IsUrl, Min, MinLength } from 'class-validator';

export class UserDto {
 
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @MinLength(4)
  password: string;

  @IsOptional()
  profilePicUrl: string;


}
