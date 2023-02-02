import { useEffect } from "react";

const Canvas = () => {
  const particles = [];
  let canvas = null;
  let context = null;
  let parentElement = null;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 4;
      this.speedX = Math.random() * 1 - 0.2;
      this.speedY = Math.random() * 1 - 0.2;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x>canvas.width || this.x<0) {
        this.speedX = -this.speedX
      }
      if (this.y>canvas.height || this.y<0) {
        this.speedY = -this.speedY
      }
    }
    draw() {
      context.fillStyle = "rgb(162, 165, 172,0.17)";
      context.beginPath();
      context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      context.stroke();
      context.fill();
    }
  }

  const animate = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
  };
  const handleParticles = () => {
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
  };
  const resizeCanvas = () => {
    canvas.width = parentElement.offsetWidth - 50;
    canvas.height = parentElement.offsetHeight - 50;
  };

  window.addEventListener("resize", resizeCanvas);

  useEffect(() => {
    canvas = document.querySelector(".canvas");
    context = canvas.getContext("2d");
    parentElement = canvas.parentElement;
    canvas.width = parentElement.offsetWidth - 50;
    canvas.height = parentElement.offsetHeight - 50;
    if (particles.length < 50) {
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    }
    if (particles.length === 50) {
      animate();
    }
  }, [particles.length]);

  return <canvas className="canvas"></canvas>;
};

export default Canvas;
