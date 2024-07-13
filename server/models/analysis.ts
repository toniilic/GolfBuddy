import { RowDataPacket } from 'mysql2';

export interface Analysis extends RowDataPacket {
  userId: number;
  averageScore: number;
  bestScore: number;
  worstScore: number;
  totalGames: number;
}

export const getAnalysis = async (pool, userId: number) => {
  const [rows] = await pool.execute<Analysis[]>(`
    SELECT 
      userId,
      AVG(score) as averageScore,
      MIN(score) as bestScore,
      MAX(score) as worstScore,
      COUNT(*) as totalGames
    FROM scores
    WHERE userId = ?
    GROUP BY userId
  `, [userId]);
  return rows[0];
};
