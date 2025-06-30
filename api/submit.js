export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const data = req.body;

  // You can add email notification, logging, or GitHub commit logic here.
  console.log('Received contributor submission:', data);

  return res.status(200).json({ success: true, message: 'Submission received.' });
}
