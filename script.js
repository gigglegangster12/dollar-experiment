const SUPABASE_URL = "https://supabase.com/dashboard/project/fispbhpknztuewrzacyf/settings/api-keys";
const SUPABASE_KEY = "sb_publishable_BIc2dFh1BiCvuemZFInSWw_Na366reC";

async function loadTotal() {
  const response = await fetch(
  `${SUPABASE_URL}/rest/v1/contributions?select=amount`,
  {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  }
);

  if (!response.ok) {
    console.error("Could not load contributions.");
    return;
  }

  const rows = await response.json();
  const totalAmount = rows.reduce((sum, row) => sum + Number(row.amount || 0), 0);

  document.getElementById("total").textContent =
    `$${totalAmount.toFixed(2)}`;

  document.getElementById("count").textContent = rows.length;

  const percentage = Math.min((totalAmount / 1000) * 100, 100);
  document.getElementById("progress").style.width = `${percentage}%`;
  document.getElementById("percent").textContent =
    `${Math.round(percentage)}% of the goal`;
}

loadTotal();
