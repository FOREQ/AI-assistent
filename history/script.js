// Загружаем историю из localStorage
    const historyList = document.getElementById("historyList");
    const history = JSON.parse(localStorage.getItem("qrHistory")) || [];

    if (history.length === 0) {
      historyList.innerHTML = "<li>История пуста</li>";
    } else {
      history.forEach((item, index) => {
        const li = document.createElement("li");
        li.style.padding = "8px 0";
        li.innerHTML = `
          <strong>Запись ${index + 1}</strong><br>
          i: ${item.i || "-"}<br>
          f: ${item.f || "-"}<br>
          s: ${item.s || "-"}<br>
          t: ${item.t || "-"}<br>
          <hr style="border:0; border-top:1px solid #2C74B3; margin:8px 0;">
        `;
        historyList.appendChild(li);
      });
    }
