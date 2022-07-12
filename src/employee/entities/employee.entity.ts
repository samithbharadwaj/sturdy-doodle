import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  name: string;

  @Prop()
  age: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
