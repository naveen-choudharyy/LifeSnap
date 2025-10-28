// Password toggle
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
  a.type = passwordInput.type === 'password' ? 'text' : 'password';
  togglePassword.classList.toggle('fa-eye');
  togglePassword.classList.toggle('fa-eye-slash');
});

// Form validation
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const emailPattern = /^[\w.-]+@[\w.-]+\.\w{2,}$/;

  if (!emailPattern.test(email)) {
    alert('❌ Please enter a valid email address.');
    return;
  }

  if (password.length < 6) {
    alert('⚠️ Password must be at least 6 characters long.');
    return;
  }

  alert('✅ Login Successful!');
});

// Google Sign-In
function handleGoogleSignIn() {
  const oauthURL =
    "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID.apps.googleusercontent.com&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email profile&include_granted_scopes=true";

  window.location.href = oauthURL;
}
