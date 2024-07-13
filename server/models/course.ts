import { RowDataPacket } from 'mysql2';

export interface Course extends RowDataPacket {
  id: number;
  name: string;
  location: string;
  par: number;
}

export const getAllCourses = async (pool) => {
  const [rows] = await pool.execute<Course[]>('SELECT * FROM courses');
  return rows;
};

export const getCourseById = async (pool, id: number) => {
  const [rows] = await pool.execute<Course[]>('SELECT * FROM courses WHERE id = ?', [id]);
  return rows[0];
};

