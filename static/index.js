console.log('###### >> index.js loaded:');

if(document.querySelector('.js-profile')){
  document.querySelector('.js-profile').addEventListener('mousedown', () => {
    window.open('profile.html')
  })
}


document.querySelector('.modal').addEventListener('mousedown', (e) => {
  console.log('###### e.target:', e.target);
  if (e.target === document.querySelector('.modal')){
    document.querySelector('.modal').style.display = 'none';
  }
})