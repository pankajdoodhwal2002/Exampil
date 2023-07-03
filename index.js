window.addEventListener("DOMContentLoaded", () => {
  const neetYearElement = document.getElementById("neetYear");
  const neetHeadingElement = document.querySelector(".mainPagePart1LeftHeading h1");
  const digits = ["4", "5", "6"];
  let currentIndex = 0;
  let eraseTimeout;
  let printTimeout;

  function printUnderscore() {
    neetYearElement.textContent = "_";
  }

  function printDigit() {
    neetYearElement.textContent = digits[currentIndex];
  }

  function animateNEET() {
    eraseTimeout = setTimeout(() => {
      printUnderscore();
      clearTimeout(eraseTimeout);

      printTimeout = setTimeout(() => {
        printDigit();
        clearTimeout(printTimeout);

        currentIndex = (currentIndex + 1) % digits.length;

        eraseTimeout = setTimeout(() => {
          printUnderscore();
          clearTimeout(eraseTimeout);

          printTimeout = setTimeout(() => {
            printDigit();
            clearTimeout(printTimeout);

            currentIndex = (currentIndex + 1) % digits.length;

            animateNEET();
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }

  animateNEET();
});

