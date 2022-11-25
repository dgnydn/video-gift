import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCreatorDto {
  id: number | null;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  name: string;

  avatar: string;
}
