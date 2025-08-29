// получаем ссылку из параметров ?data=...
const params = new URLSearchParams(window.location.search);
const qrLink = params.get("data");

if (qrLink) {
  try {
    const url = new URL(qrLink);
    document.getElementById("i").textContent = url.searchParams.get("i") || "-";
    document.getElementById("f").textContent = url.searchParams.get("f") || "-";
    document.getElementById("s").textContent = url.searchParams.get("s") || "-";
    document.getElementById("t").textContent = url.searchParams.get("t") || "-";
  } catch (err) {
    console.error("Некорректный QR-ссылка:", err);
  }
}
