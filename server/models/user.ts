import { RowDataPacket } from 'mysql2';

export interface User extends RowDataPacket {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const createUser = async (pool, user: Omit<User, 'id'>) => {
  const [result] = await pool.execute(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [user.username, user.email, user.password]
  );
  return result;
};

export const getUserByEmail = async (pool, email: string) => {
  const [rows] = await pool.execute<User[]>(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0];
};

