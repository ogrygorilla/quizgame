import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flashcard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  rightAnswer: string;

  @Column('jsonb', { nullable: true })
  wrongAnswers: string[];
}
