let count = 0;

function startMadness() {
  document.getElementById("disclaimer").style.display = "none";
  const interval = setInterval(() => {
    const face = document.createElement('div');
    face.textContent = "🫠 You Are An Idiot!";
    face.style.position = 'absolute';
    face.style.left = Math.random() * window.innerWidth + 'px';
    face.style.top = Math.random() * window.innerHeight + 'px';
    face.style.color = 'red';
    face.style.fontSize = '24px';
    face.style.fontWeight = 'bold';
    document.body.appendChild(face);

    count++;
    if (count > 50) clearInterval(interval);
  }, 500);
}
