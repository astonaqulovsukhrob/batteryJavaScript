navigator.getBattery().then((battery) => {
  const batteryColor = document.querySelector(".battery-color");
  const batteryFoyiz = document.querySelector(".battery-foyiz");
  const isCharging = document.querySelector(".isCharging");
  const batteryBolt = document.querySelector(".battery-bolt");

  const updateAll = () => {
    updateChargeInfo();
    updateLevelInfo();
  };

  updateAll();

  function updateLevelInfo() {
    batteryColor.style.width = battery.level * 100 + "%";
    batteryFoyiz.innerHTML = battery.level * 100 + "%";
  }

  function updateChargeInfo() {
    isCharging.innerHTML = battery.charging ? "Your device charging" : "";
    batteryColor.classList.toggle("active");
    batteryBolt.classList.toggle("hidden");
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
});
