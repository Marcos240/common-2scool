import { Course, Grade } from '.';
import { Teacher } from './Teacher';

export namespace Class {

  export interface ClassDto {
    id: string;
    name: string;
    courseId: string;
    course: Course.CourseDto;
    gradeId: string;
    grade: Grade.GradeDto;
    formTeacherId: string;
    formTeacher: Teacher.TeacherDto;
    students: [];
    noStudents: number;
  }

  export interface ClassForListDto {
    id: string;
    name: string;
    courseId: string;
    course: Course.CourseDto;
    gradeId: string;
    grade: Grade.GradeDto;
    formTeacherId: string;
    formTeacher: Teacher.TeacherDto;
    noStudents: number;
  }

  export interface ClassForStudentDto {
    id: string;
    name: string;
    courseId: string;
    formTeacherId: string;
  }

  export interface CreateUpdateClassDto {
    Name: string;
    CourseId: string;
    GradeId: string;
    FormTeacherId: string;
  }
}