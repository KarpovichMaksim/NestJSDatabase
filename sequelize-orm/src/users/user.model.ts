import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class Users extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
