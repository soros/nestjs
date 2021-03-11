import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

// @Index(['name', 'type'])   // if we need to create a composite index
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index() // we added index to name column
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}

