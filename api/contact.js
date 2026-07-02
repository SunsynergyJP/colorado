const GAS_URL = 'https://script.google.com/macros/s/AKfycbwapG4rQMnXsWceWKwDKKOBU-d90mi8uN-BieGyneJJDfw4M8CRwueMJaLmKLhQZlyO/exec';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const params = new URLSearchParams(req.query);
    await fetch(GAS_URL + '?' + params.toString());
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
