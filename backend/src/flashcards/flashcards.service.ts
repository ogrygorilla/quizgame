import { Injectable } from '@nestjs/common';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { UpdateFlashcardDto } from './dto/update-flashcard.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Flashcard } from './entities/flashcard.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FlashcardsService {
  constructor(
    @InjectRepository(Flashcard)
    private flashcardRepository: Repository<Flashcard>,
  ) {}
  create(createFlashcardDto: CreateFlashcardDto) {
    const flashcard = this.flashcardRepository.create(createFlashcardDto);
    return this.flashcardRepository.save(flashcard);
  }

  findAll(): Promise<Flashcard[]> {
    return this.flashcardRepository.find();
  }

  findOne(id: number) {
    return this.flashcardRepository.findOneBy({ id });
  }

  update(id: number, updateFlashcardDto: UpdateFlashcardDto) {
    return `This action updates a #${id} flashcard`;
  }

  remove(id: number) {
    return `This action removes a #${id} flashcard`;
  }
}
