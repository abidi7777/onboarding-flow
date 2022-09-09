// eslint-disable-next-line import/no-unresolved
import { Low, JSONFile } from 'lowdb';
import path from 'path';

const file = path.resolve(process.cwd(), 'public', 'data.json');

export default async function handler(req, res) {
  let db = null;

  const initDB = async () => {
    const adapter = new JSONFile(file);
    db = new Low(adapter);

    await db.read();

    db.data ||= { users: [] };
  };

  try {
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
  } catch (e) {
    console.log(e);
    res.status(200).json({ data: req.body });
  }
}
