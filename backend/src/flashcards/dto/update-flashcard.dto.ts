import { PartialType } from '@nestjs/mapped-types';
import { CreateFlashcardDto } from './create-flashcard.dto';

export class UpdateFlashcardDto extends PartialType(CreateFlashcardDto) {
  // This class extends CreateFlashcardDto and makes all its properties optional
  // It can be used to update a flashcard with only the fields that need to be changed
}
