
  const btn = document.querySelector('.sixth');

  btn.addEventListener('mouseenter', () => {
    btn.classList.add('hovering');
  });

  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    btn.style.setProperty('--x', `${x}%`);
    btn.style.setProperty('--y', `${y}%`);
  });

  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('hovering');
    btn.style.removeProperty('--x');
    btn.style.removeProperty('--y');
  });
  //11
  document.querySelector('.eleventh-btn').addEventListener('click', function () {
    this.classList.toggle('active');
  });
//13
// const bubble = document.getElementById('bubble');
// const sound = document.getElementById('popSound');

// bubble.addEventListener('click', () => {
//   bubble.classList.add('pop_bubble');
//   sound.currentTime = 0;
//   sound.play();
//   sound.onended = () => {
//     bubble.classList.remove('pop_bubble');
//   };
//   setTimeout(() => {
//     bubble.classList.remove('pop_bubble');
//   }, 500);
// });
//13

function popBubble(el) {
  if (!el.classList.contains('popped')) {
    el.classList.add('popped');

    // Show small bubbles
    const bubbles = el.querySelectorAll('.small-bubble');
    bubbles.forEach((b, i) => {
      b.style.animation = `bubbleRise 1.2s ease ${i * 0.2}s forwards`; // staggered
    });

    // Hide big bubble & text immediately
    el.querySelector('.bubble').style.opacity = '0';
    el.querySelector('.bubble-label').style.opacity = '0';

    // Wait until small bubbles finish popping, then bring big bubble back
    setTimeout(() => {
      el.classList.remove('popped');
      el.querySelector('.bubble').style.opacity = '1';
      el.querySelector('.bubble-label').style.opacity = '1';

      // Reset small bubbles
      bubbles.forEach(b => {
        b.style.animation = 'none';
        b.offsetHeight; // force reflow
        b.style.opacity = '0';
      });
    }, 2500); // Delay return after small bubbles pop
  }
}
//14
  function toggleSlide(btn) {
    btn.classList.toggle('slid');
  }


