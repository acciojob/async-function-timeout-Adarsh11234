document.addEventListener("DOMContentLoaded", () => {
  const outputDiv = document.getElementById("output");

  // Ensure the output div is empty at the start
  outputDiv.innerHTML = "";

  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000);
    });
  }

  getNumbers()
    .then((numbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evens = numbers.filter(num => num % 2 === 0);
          outputDiv.innerHTML = `Filtered Evens: ${evens.join(", ")}`;
          resolve(evens);
        }, 1000);
      });
    })
    .then((evens) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubled = evens.map(num => num * 2);
          outputDiv.innerHTML = `Doubled Evens: ${doubled.join(", ")}`;
          resolve(doubled);
        }, 2000);
      });
    });
});
