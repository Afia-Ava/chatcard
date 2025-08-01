document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const loginForm = document.getElementById('login-form');
  const confirmPasswordGroup = document.getElementById(
    'confirm-password-group'
  );
  const formTitle = document.getElementById('form-title');
  const formSubtitle = document.getElementById('form-subtitle');
  const submitBtn = document.getElementById('submit-btn');
  const switchLink = document.getElementById('switch-link');
  const switchToSignup = document.getElementById('switch-to-signup');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      if (button.dataset.tab === 'login') {
        confirmPasswordGroup.style.display = 'none';
        formTitle.textContent = 'Welcome Back';
        formSubtitle.textContent = 'Log in to create or request your ChatCard';
        submitBtn.textContent = 'Log In';
        switchLink.style.display = 'none';
      } else if (button.dataset.tab === 'signup') {
        confirmPasswordGroup.style.display = 'block';
        formTitle.textContent = 'Create Account';
        formSubtitle.textContent = 'Join to start your ChatCard journey';
        submitBtn.textContent = 'Sign Up';
        switchLink.style.display = 'block';
      }
    });
  });

  switchToSignup.addEventListener('click', event => {
    event.preventDefault();
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-tab="signup"]').classList.add('active');
    confirmPasswordGroup.style.display = 'block';
    formTitle.textContent = 'Create Account';
    formSubtitle.textContent = 'Join to start your ChatCard journey';
    submitBtn.textContent = 'Sign Up';
    switchLink.style.display = 'block';
  });

  loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const activeTab = document.querySelector('.tab-button.active').dataset.tab;

    if (!email || !password) {
      alert('Please fill in both email and password.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (activeTab === 'signup' && password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const action = activeTab === 'login' ? 'Logging in' : 'Signing up';
    alert(
      `${action} with ${email}. This is a demo! Replace with real authentication.`
    );
    window.location.href = 'cards.html';
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
