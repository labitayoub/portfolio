'use client'
import { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.fadeDelay = Math.random() * 600;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.life = Math.random() * 3000 + 2000;
        this.maxLife = this.life;
        this.size = Math.random() * 4 + 3; // Increased from 2+1 to 4+3 (3-7px)
        this.opacity = 0;
        this.fadeDelay = Math.random() * 600;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      update() {
        const now = Date.now();
        
        // Handle initial fade in
        if (now > this.fadeStart && this.opacity < 0.6) {
          this.opacity += 0.005;
        }

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Decrease life
        this.life -= 16;

        // Start fading out when life is low
        if (this.life < 1000 && !this.fadingOut) {
          this.fadingOut = true;
        }

        if (this.fadingOut) {
          this.opacity -= 0.008;
        }

        // Reset particle if dead or out of bounds
        if (this.life <= 0 || this.opacity <= 0 || 
            this.x < -10 || this.x > canvas.width + 10 || 
            this.y < -10 || this.y > canvas.height + 10) {
          this.reset();
        }
      }

      draw() {
        if (this.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          ctx.fillStyle = '#00ff99';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 70); // Slightly reduced count for larger particles
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    initParticles();
    animate();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default BackgroundAnimation;