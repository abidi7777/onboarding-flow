export default async function handler(_, res) {
  res.status(404).json({ message: 'Not Found' });
}
