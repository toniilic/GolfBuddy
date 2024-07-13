import { RowDataPacket } from 'mysql2';

export interface Friend extends RowDataPacket {
  id: number;
  userId: number;
  friendId: number;
  status: 'pending' | 'accepted';
}

export const addFriend = async (pool, userId: number, friendId: number) => {
  const [result] = await pool.execute(
    'INSERT INTO friends (userId, friendId, status) VALUES (?, ?, ?)',
    [userId, friendId, 'pending']
  );
  return result;
};

export const acceptFriendRequest = async (pool, userId: number, friendId: number) => {
  const [result] = await pool.execute(
    'UPDATE friends SET status = ? WHERE userId = ? AND friendId = ?',
    ['accepted', friendId, userId]
  );
  return result;
};

export const getFriends = async (pool, userId: number) => {
  const [rows] = await pool.execute<Friend[]>(
    'SELECT * FROM friends WHERE (userId = ? OR friendId = ?) AND status = ?',
    [userId, userId, 'accepted']
  );
  return rows;
};
