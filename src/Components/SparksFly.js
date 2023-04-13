import React, { useState, useEffect } from 'react';
import './Sparks.css';

function Particle() {
  // Cria um elemento HTML para a partícula
  const particle = document.createElement('div');
  particle.classList.add('particle');
  
  // Define uma posição aleatória para a partícula
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.top = Math.random() * window.innerHeight + 'px';
  
  // Define um atraso aleatório para a partícula
  const delay = Math.random() * 2;
  particle.style.animationDelay = `${delay}s`;

  // Define um deslocamento horizontal aleatório para a partícula
  const horizontalOffset = Math.random() * 600 - 200;
  particle.style.transform = `translate(${horizontalOffset}px, 0)`;

  
  // Adiciona a partícula ao documento
  document.body.appendChild(particle);
}

// Cria 50 partículas aleatórias com atrasos diferentes
for (let i = 0; i < 150; i++) {
  Particle();
}
  
  export default Particle;