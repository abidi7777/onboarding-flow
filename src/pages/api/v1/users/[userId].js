export default async function handler(req, res) {
  if (req.method === 'POST') {
    res.status(201).json({ data: req.body });
  }
}
