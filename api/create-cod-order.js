// VeBlyss Global — COD order endpoint scaffold
// Production version: validate payload, persist order, send authenticated SMTP email.
// SMTP credentials must be stored as server-side environment variables, never in browser code.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const order = req.body || {};
  const total = Number(order.total || 0);
  const city = String(order.city || '').toLowerCase();
  if (total < 5000) return res.status(400).json({ error: 'COD requires a minimum order value of ₹5,000.' });
  if (!city.includes('bengal')) return res.status(400).json({ error: 'COD is currently available only within Bangalore.' });
  // TODO: generate server-side order ID, persist order, and send to orders@veblyssglobal.com via SMTP.
  return res.status(200).json({ ok: true, status: 'accepted', message: 'COD order accepted pending backend email configuration.' });
}
