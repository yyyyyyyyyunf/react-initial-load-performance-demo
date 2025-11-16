(function () {
  const goToWork = () => {
    console.log("上班去了～");

    const start = Date.now();
    while (Date.now() - start < 30);
    petACat();

    const startAgain = Date.now();
    while (Date.now() - startAgain < 30);
    grabSomeCoffee();
    const finalStart = Date.now();
    while (Date.now() - finalStart < 30);
  };

  const petACat = () => {
    console.log("摸摸猫猫～");
    const start = Date.now();
    while (Date.now() - start < 20);
  };

  const grabSomeCoffee = () => {
    console.log("来杯咖啡～");
    orderCoffee();
    const start = Date.now();
    while (Date.now() - start < 20);
    return "Here's your coffee!";
  };

  const orderCoffee = () => {
    console.log("点杯咖啡～");
    const start = Date.now();
    while (Date.now() - start < 30);
  };

  goToWork();

  const div = document.createElement("div");
  div.innerText = "到达SOHO啦～";
  document.getElementById("root").appendChild(div);
})();
