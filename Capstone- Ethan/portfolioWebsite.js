function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

document.addEventListener("DOMContentLoaded", function () {
    // Check if the browser supports the Web Speech API
    if ('speechSynthesis' in window) {
        let hoverDelay;
        document.body.addEventListener('mouseover', function (event) {
            clearTimeout(hoverDelay);  // Clear any previous delays

            hoverDelay = setTimeout(() => {
                let text = event.target.innerText || event.target.value;
                if (text) {
                    speak(text);
                }
            }, 300);  // 300ms delay before speaking
        });

        // Cancel speech if the mouse moves out before the delay
        document.body.addEventListener('mouseout', function (event) {
            clearTimeout(hoverDelay);
            window.speechSynthesis.cancel();
        });
    } else {
        console.warn("This browser does not support the Web Speech API");
    }
});

function speak(text) {
    // Cancel the previous utterance if it's still speaking
    window.speechSynthesis.cancel();

    let utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}
  

  

