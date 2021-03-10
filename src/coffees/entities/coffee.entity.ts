import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // sql table === coffee (class name converted to lower case)
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true }) // labels column as type 'json' and make it optional using { nullable: true }
  flavors: string[];
}
