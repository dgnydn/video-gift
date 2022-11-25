import { CreateCreatorDto } from 'src/creator/dto/create-creator.dto';

export class CreateVideoDto {
  id: number | null;
  title: string;
  url: string;
  published: boolean;
  author: CreateCreatorDto;
}
