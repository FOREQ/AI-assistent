// получаем ссылку из параметров ?data=...
const params = new URLSearchParams(window.location.search);
const qrLink = params.get("data");

if (qrLink) {
  try {
    const url = new URL(qrLink);

    const data = {
      i: url.searchParams.get("i") || "-",
      f: url.searchParams.get("f") || "-",
      s: url.searchParams.get("s") || "-",
      t: url.searchParams.get("t") || "-",
      time: new Date().toLocaleString() // время сохранения
    };

    // выводим данные на экран
    document.getElementById("i").textContent = data.i;
    document.getElementById("f").textContent = data.f;
    document.getElementById("s").textContent = data.s;
    document.getElementById("t").textContent = data.t;

    // сохраняем в localStorage
    let history = JSON.parse(localStorage.getItem("qrHistory")) || [];
    history.push(data);
    localStorage.setItem("qrHistory", JSON.stringify(history));

  } catch (err) {
    console.error("Некорректный QR-ссылка:", err);
  }
}
