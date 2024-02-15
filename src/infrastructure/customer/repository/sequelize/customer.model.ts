/**
 * file: src/db/sequelize/model/customer.model.ts
 * description: file responsible for the Customer Model in Sequelize
 * data: 11/22/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Model, Table, PrimaryKey, Column } from "sequelize-typescript";

@Table({
  tableName: "customers",
  timestamps: false,
})
export default class CustomerModel extends Model {

  @PrimaryKey
  @Column
  declare id: string;

  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: false })
  declare street: string;

  @Column({ allowNull: false })
  declare number: number;

  @Column({ allowNull: false })
  declare zipcode: string;

  @Column({ allowNull: false })
  declare city: string;

  @Column({ allowNull: false })
  declare active: boolean;

  @Column({ allowNull: false })
  declare rewardPoints: number;
}