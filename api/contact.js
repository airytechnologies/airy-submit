export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const body = await req.body;
  console.log('New contact message:', body);

  res.status(200).json({ message: 'Contact form received' });
}