// eslint-disable-next-line import/no-unresolved
import { Low, JSONFile } from 'lowdb';
import path from 'path';

const file = path.join(__dirname, '..', '..', 'data');
const adapter = new JSONFile(file);
const db = new Low(adapter);

const initDB = async () => {
  await db.read();

  db.data ||= { users: [] };
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId } = req.query;

    await initDB();

    const duplicateUser = db.data.users.find((user) => user.userId === userId);

    if (duplicateUser) {
      duplicateUser.products = req.body.products;
    } else {
      db.data.users.push(req.body);
    }

    await db.write();

    res.status(201).json({ data: req.body });
  } else if (req.method === 'GET') {
    const { userId } = req.query;

    await initDB();

    res.status(200).json({ data: db.data.users.find((user) => user.userId === userId) });
  }
}
