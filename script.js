let count = 0;
<button onclick="startMadness()">Enter</button>

<audio id="idiot-audio" loop>
  <source src="you-are-an-idiot.mp3" type="audio/mpeg">
</audio>
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
    if (count > 500) clearInterval(interval);
  }, 200);
}
