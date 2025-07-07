// Form inputs
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passError");
const noPassError = document.getElementById("noPass");

// error icon animation
  function shakeElement(selectorOrClassName) {
    let el;

    // If it starts with . or #, treat it as a selector
    if (selectorOrClassName.startsWith('.') || selectorOrClassName.startsWith('#')) {
      el = document.querySelector(selectorOrClassName);
    } else {
      // Otherwise assume it's a class name
      el = document.querySelector(`.${selectorOrClassName}`);
    }

    if (!el) return;

    // Ensure Tailwind transition/transform are applied
    el.classList.add('transition', 'transform');

    // Apply shake effect
    el.classList.add('-translate-x-1');

    setTimeout(() => {
      el.classList.replace('-translate-x-1', 'translate-x-1');
    }, 50);

    setTimeout(() => {
      el.classList.remove('translate-x-1');
    }, 100);
  }

  function clearWarning() {
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    noPassError.style.display = 'none';
  }

// Credential checker functions
function credentialChecker() {
    let userEmail = document.getElementById("email").value;
    let userPassTry = document.getElementById("passtry").value;
    let userPassConfirm = document.getElementById("passconfirm").value;

    if (!userEmail.endsWith("@gmail.com")) {
        emailError.style.display = 'block';
        shakeElement('#emailError');
    } else if (userPassTry !== userPassConfirm) {
        passwordError.style.display = 'block';
        shakeElement('#passError');
    } else if (userPassTry === "" || userPassConfirm === "") {
        noPassError.style.display = 'block'
        shakeElement('#noPass'); 
}
}

const myform = document.getElementById("form")
myform.addEventListener('submit', function(event) {
    event.preventDefault();
})

