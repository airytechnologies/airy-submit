export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const data = req.body;

  // Handle contact message here — email, CRM, etc.
  console.log('Received contact form:', data);

  return res.status(200).json({ success: true, message: 'Message received.' });
}
