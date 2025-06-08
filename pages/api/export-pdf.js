export default function handler(req, res) {
  const { data } = req.body;
  console.log("Exporting PDF for:", data);
  res.status(200).json({ message: "PDF export stubbed. Real PDF logic coming soon." });
}
