import { NonFunctionProperties } from '.';
import { BaseEntity } from '../entities/BaseEntity';

export type CreateEntityInput<T> = Omit<NonFunctionProperties<T>, keyof Omit<BaseEntity, 'createdBy'>>;
export type UpdateEntityInput<T> = Omit<NonFunctionProperties<T>, keyof Omit<BaseEntity, 'updatedBy'>>;
export type PatchEntityInput<T> = Partial<UpdateEntityInput<T>>;
