import { RowDataPacket } from 'mysql2';

export interface Score extends RowDataPacket {
  id: number;
  userId: number;
  score: number;
  course: string;
  date: Date;
}

export const createScore = async (pool, score: Omit<Score, 'id'>) => {
  const [result] = await pool.execute(
    'INSERT INTO scores (userId, score, course, date) VALUES (?, ?, ?, ?)',
    [score.userId, score.score, score.course, score.date]
  );
  return result;
};

export const getScoresByUserId = async (pool, userId: number) => {
  const [rows] = await pool.execute<Score[]>(
    'SELECT * FROM scores WHERE userId = ? ORDER BY date DESC',
    [userId]
  );
  return rows;
};

