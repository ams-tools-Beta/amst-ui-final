export default function handler(req, res) {
  const { query } = req.body;
  const responses = {
    "#814": "Chucking position of the part on the main spindle. Typically set in inches.",
    "#818": "Total required travel: part length + cutoff + face clearance. Stored as 0000022350 for 2.2350\"",
    "#821": "Part stick-out from sub spindle collet. Used for clearance/interference logic.",
    "G165": "Optional Citizen-only code. Enables synchronized spindle mode (requires licensed option).",
    "/MB1": "Turns ON/OFF high pressure coolant line #1 (same code toggles)."
  };

  for (const key in responses) {
    if (query.includes(key)) {
      return res.status(200).json({ response: responses[key] });
    }
  }

  return res.status(200).json({ response: "No match found. Try asking about #814, G165, or /MBx." });
}
