const password = document.getElementById('password');
const showBtn = document.getElementById('showBtn');

showBtn.addEventListener('click', function() {
  // Toggle display password
  if(password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password'; 
  }
}); 