export default async function handler(req, res) {
  // 🔥 ADICIONE ISSO AQUI (logo no início)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  // 👇 ESSENCIAL para o navegador (preflight)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {

    const resposta = await fetch(
      "https://hinaavyyhoqcdycutqte.supabase.co/rest/v1/conselho_classe?select=*&limit=1",
      {
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpbmFhdnl5aG9xY2R5Y3V0cXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNTk1OTYsImV4cCI6MjA4NzYzNTU5Nn0.ZxWugRhPj8-2nf3GrolGmwgIWlteHz4r0tkonPZiBMs"
        }
      }
    );

    if (!resposta.ok) throw new Error("erro");

    res.status(200).json({ status: "ok" });

  } catch (e) {
    res.status(500).json({ status: "erro" });
  }
}
