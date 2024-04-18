/**
 * file: src/domain/validator/validator.interface.ts
 * description: file responsible for the Validator Interface
 * data: 04/18/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default interface ValidatorInterface<T> {
  validate(entity: T): void
}