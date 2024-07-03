import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './product.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'firstName is required'],
    trim: true,
    maxlength: [20, 'firstName can not be more then 20 character'],
  },
  middleName: { type: String, trim: true },
  lastName: {
    type: String,
    required: [true, 'lastName is required'],
    trim: true,
    maxlength: [20, 'lastName can not be more then 20 character'],
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, 'fatherName is required'],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'fatherOccupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'fatherContactNo is required'],
  },
  motherName: { type: String, required: [true, 'motherName is required'] },
  motherOccupation: {
    type: String,
    required: [true, 'motherOccupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'motherContactNo is required'],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, 'name is required'] },
  occupation: { type: String, required: [true, 'occupation is required'] },
  contactNo: { type: String, required: [true, 'contactNo is required'] },
  address: { type: String, required: [true, 'address is required'] },
});

// const studentSchema = new Schema<TStudent, StudentModel, IStudentMethods>({ // * This line for custom instance method with mongoose

const studentSchema = new Schema<TStudent>(
  {
    id: {
      type: String,
      required: [true, 'Student ID is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      maxlength: [20, 'Password can not be more than 20 characters'],
    },
    name: { type: userNameSchema, required: [true, 'name is required'] },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not valid gender',
      },
      required: [true, 'gender is required'],
    },
    dateOfBirth: { type: String },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
    },
    contactNo: { type: String, required: [true, 'contactNo is required'] },
    emergencyContactNo: {
      type: String,
      required: [true, 'emergencyContactNo is required'],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not valid blood group',
      },
    },
    presentAddress: {
      type: String,
      required: [true, 'presentAddress is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'permanentAddress is required'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'guardian is required'],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'localGuardian is required'],
    },
    profileImg: { type: String },
    isActive: {
      type: String,
      enum: {
        values: ['active', 'blocked'],
        message: '{VALUE} is not valid status',
      },
      default: 'active',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    toJSON: { virtuals: true },
  },
);

export const Product = model<TStudent>('Product', studentSchema);
