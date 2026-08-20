import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, Play, Pause } from 'lucide-react';
import { hapticFeedback } from '../../utils/mobileFeatures';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<any>(null);
  const isPlayingRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const audioUrl = '/Villanelle.mp3';

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    import('three').then((THREE) => {
      if (cancelled || !container) return;

      const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 45;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    const particleCount = 2500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const groupIndex = Math.floor((i / particleCount) * 4);
      let radius = 10 + Math.random() * 10;
      let theta = Math.random() * Math.PI * 2;
      let phi = Math.acos(2 * Math.random() - 1);

      switch (groupIndex) {
        case 0:
          radius = 10 + Math.random() * 5;
          break;
        case 1:
          radius = 5 + Math.random() * 3;
          break;
        case 2:
          radius = 12 + Math.random() * 4;
          phi = (Math.random() * 0.5 + 0.75) * Math.PI;
          break;
        case 3:
        default:
          radius = 15 + Math.random() * 5;
          break;
      }

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      switch (groupIndex) {
        case 0:
          colors[i * 3] = 0.1 + Math.random() * 0.1;
          colors[i * 3 + 1] = 0.1 + Math.random() * 0.1;
          colors[i * 3 + 2] = 0.4 + Math.random() * 0.2;
          break;
        case 1:
          colors[i * 3] = 0.2 + Math.random() * 0.1;
          colors[i * 3 + 1] = 0.3 + Math.random() * 0.1;
          colors[i * 3 + 2] = 0.5 + Math.random() * 0.2;
          break;
        case 2:
          colors[i * 3] = 0.3 + Math.random() * 0.1;
          colors[i * 3 + 1] = 0.1 + Math.random() * 0.1;
          colors[i * 3 + 2] = 0.4 + Math.random() * 0.1;
          break;
        case 3:
        default:
          colors[i * 3] = 0.4 + Math.random() * 0.3;
          colors[i * 3 + 1] = 0.4 + Math.random() * 0.3;
          colors[i * 3 + 2] = 0.6 + Math.random() * 0.3;
          break;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      blending: THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x3366ff, 1, 100);
    blueLight.position.set(30, 0, 15);
    scene.add(blueLight);

    const redLight = new THREE.PointLight(0xff3366, 1, 100);
    redLight.position.set(-30, 0, 15);
    scene.add(redLight);

    const greenLight = new THREE.PointLight(0x33ff66, 1, 100);
    greenLight.position.set(0, 30, 15);
    scene.add(greenLight);

    const purpleLight = new THREE.PointLight(0xaa33ff, 1, 100);
    purpleLight.position.set(0, -30, 15);
    scene.add(purpleLight);

    const spotLights = [blueLight, redLight, greenLight, purpleLight];

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const AudioContext = (window.AudioContext || (window as any).webkitAudioContext) as any;
    let audioContext: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let dataArray: Uint8Array | null = null;
    let audioSource: MediaElementAudioSourceNode | null = null;
    let animationFrameId: number;

    if (AudioContext) {
      audioContext = new AudioContext();
      audioContextRef.current = audioContext;
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 1024;
      dataArray = new Uint8Array(analyser.frequencyBinCount);
    }

    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.crossOrigin = 'anonymous';
    audioRef.current = audio;

    const handleCanPlay = () => {
      if (audioContext && analyser && !audioSource) {
        audioSource = audioContext.createMediaElementSource(audio);
        audioSource.connect(analyser);
        analyser.connect(audioContext.destination);
      }
    };

    const handleAudioError = (event: Event) => {
      console.error('Audio error', event);
      setErrorMessage('No se pudo cargar el audio de fondo.');
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleAudioError);
    audio.load();

    const getAverageVolume = (
      array: Uint8Array,
      start: number,
      end: number
    ) => {
      let sum = 0;
      const count = Math.max(1, end - start);
      for (let i = start; i < end && i < array.length; i += 1) {
        sum += array[i];
      }
      return sum / count;
    };

    const animate = () => {
      animationFrameId = window.requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      let bass = 0;
      let lowMid = 0;
      let mid = 0;
      let highMid = 0;
      let treble = 0;

      if (analyser && dataArray && isPlayingRef.current) {
        analyser.getByteFrequencyData(dataArray);
        bass = getAverageVolume(dataArray, 0, 10) / 255;
        lowMid = getAverageVolume(dataArray, 10, 100) / 255;
        mid = getAverageVolume(dataArray, 100, 200) / 255;
        highMid = getAverageVolume(dataArray, 200, 300) / 255;
        treble = getAverageVolume(dataArray, 300, 400) / 255;
      }

      const baseRotationX = Math.sin(time * 0.3) * 0.003;
      const baseRotationY = Math.cos(time * 0.2) * 0.005;
      const extraRotationX = bass * 0.002 * Math.sin(time * 2);
      const extraRotationY = mid * 0.004 * Math.cos(time);

      particles.rotation.x += baseRotationX + extraRotationX;
      particles.rotation.y += baseRotationY + extraRotationY;
      particles.rotation.z = Math.sin(time * 0.1) * 0.05;

      spotLights.forEach((light, index) => {
        const audioSegment = Math.floor(time % 20);
        let baseIntensity = 0.3;
        const primaryIndex = Math.floor(audioSegment / 5);
        if (index === primaryIndex) {
          baseIntensity = 2.0;
        } else if (index === (primaryIndex + 1) % 4 || index === (primaryIndex + 3) % 4) {
          baseIntensity = 0.5 + (Math.sin(((audioSegment % 5) / 5) * Math.PI) * 0.5 + 0.5) * 0.8;
        }

        switch (index) {
          case 0:
            light.intensity = baseIntensity + bass * 2;
            light.position.x = 30 * Math.sin(time * 0.4);
            light.position.y = 10 * Math.cos(time * 0.5);
            break;
          case 1:
            light.intensity = baseIntensity + mid * 2;
            light.position.x = -30 * Math.cos(time * 0.3);
            light.position.y = -10 * Math.sin(time * 0.4);
            break;
          case 2:
            light.intensity = baseIntensity + highMid * 2;
            light.position.y = 30 * Math.sin(time * 0.2);
            light.position.x = 15 * Math.cos(time * 0.3);
            break;
          case 3:
            light.intensity = baseIntensity + treble * 2;
            light.position.y = -30 * Math.cos(time * 0.3);
            light.position.x = -15 * Math.sin(time * 0.4);
            break;
          default:
            break;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    cleanup = () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
      audio.pause();
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleAudioError);
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [audioUrl]);

  const handleDownload = () => {
    hapticFeedback('medium');
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'CV_Resumido.pdf';
    link.click();
  };

  const togglePlay = async () => {
    try {
      await hapticFeedback('medium');
    } catch (error) {
      console.warn('Haptic feedback no disponible', error);
    }

    const audio = audioRef.current;
    if (!audio) {
      setErrorMessage('El audio aún no está listo.');
      return;
    }

    if (!isPlaying) {
      try {
        if (audioContextRef.current?.state === 'suspended') {
          await audioContextRef.current.resume();
        }
        await audio.play();
        isPlayingRef.current = true;
        setIsPlaying(true);
      } catch (error) {
        console.error('Error al reproducir audio:', error);
        setErrorMessage('No se pudo iniciar la música de fondo.');
      }
    } else {
      audio.pause();
      isPlayingRef.current = false;
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      <div ref={containerRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-slate-300 text-sm font-medium tracking-tight">Disponible para trabajar</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white mb-4 tracking-tighter">
            Hola, soy <span className="text-white">Moebius</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 font-light tracking-tight">
            Desarrollador Full Stack & Diseñador UI/UX
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-slate-100 transition-colors w-full sm:w-auto justify-center"
            >
              <Download size={20} />
              Descargar CV
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="flex items-center gap-2 bg-slate-800/60 text-white border border-slate-700 px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-slate-700 transition-colors w-full sm:w-auto justify-center"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              {isPlaying ? 'Pausar música' : 'Reproducir música'}
            </motion.button>
          </div>

          {errorMessage && (
            <p className="mt-4 text-sm text-red-400">{errorMessage}</p>
          )}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-slate-400 text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={28} className="text-slate-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
