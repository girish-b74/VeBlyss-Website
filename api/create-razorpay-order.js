// VeBlyss Global — Razorpay order endpoint scaffold
// Add Razorpay credentials as server-side environment variables later.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const order = req.body || {};
  const total = Number(order.total || 0);
  if (!Number.isFinite(total) || total <= 0) return res.status(400).json({ error: 'Invalid order total.' });
  // TODO: create a Razorpay order server-side using RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET.
  return res.status(200).json({ ok: true, status: 'ready', message: 'Razorpay endpoint scaffold ready for credentials and SDK integration.' });
}
