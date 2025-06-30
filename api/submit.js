export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const body = await req.body;
  console.log('New submission:', body);

  res.status(200).json({ success: true });
}