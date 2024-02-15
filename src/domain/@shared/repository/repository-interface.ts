/**
 * file: src/domain/@shared/repository/repository-interface.ts
 * description: file responsible for the Repository Interface
 * data: 10/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default interface RepositoryInterface<T> {
  create(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  find(id: string): Promise<T>;
  findAll(): Promise<T[]>;
}