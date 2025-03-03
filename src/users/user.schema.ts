import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

export interface User extends Document {
  username: string;
  email: string;
  password: string;
}
