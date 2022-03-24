import { useEffect, useRef, useState } from 'react';

const SCALE = 25;

interface IDot {
  x: number,
  y: number,
  id: number,
  radius: number,
  context: CanvasRenderingContext2D,
  color: string,
  render: () => void
}

class Dot implements IDot {
  x;
  y;
  id;
  radius;
  context;
  color;


  constructor(id: number, x: number, y: number, context: CanvasRenderingContext2D) {
    this.id = id;
    this.x = x;
    this.y = y;
    // this.color = 'rgba(239, 239, 240, 0.15)';
    this.color = 'rgba(255, 255, 255, 0.15)';
    this.radius = 3;
    this.context = context;
  }

  render() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = this.color;
    this.context.fill();
  }
}

const useDotGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'));
  const contextRef = useRef<CanvasRenderingContext2D>();
  const dots = useRef<IDot[]>([]);
  const [ width, setWidth ] = useState(window.innerWidth);
  const [ height, setHeight ] = useState(window.innerHeight);

  function isPointInRadius(a: number, b: number, x: number, y: number, r: number) {
    const dist_points = (a - x) * (a - x) + (b - y) * (b - y);

    r *= r;

    return dist_points < r;
  }

  useEffect(() => {
    if (!canvasRef.current) return;

    contextRef.current = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;

    const render = () => {
      if (!contextRef.current) return;

      contextRef.current.clearRect(0, 0, width, height);
      dots.current.forEach((d) => {
        d.render();
      });

      return requestAnimationFrame(render);
    };

    const handle = requestAnimationFrame(render);

    return () => {
      if (handle) {
        cancelAnimationFrame(handle);
      }
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !contextRef.current) return;

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    const cols = width / SCALE;
    const rows = height / SCALE;

    let id = 0;

    dots.current = [];

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        const dot = new Dot(id++, x * SCALE, y * SCALE, contextRef.current);

        dots.current.push(dot);
      }
    }
  }, [ width, height ]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize, false);
    window.addEventListener('orientationchange', handleResize, false);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      dots.current.forEach((d) => {
        d.color = isPointInRadius(event.clientX, event.clientY + window.innerHeight * 0.005, d.x, d.y, 70) ? 'rgba(239, 239, 240, 0.4)' : 'rgba(239, 239, 240, 0.15)';
      });
    };

    window.addEventListener('mousemove', handleMouseMove, false);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { canvasRef };
};

export default useDotGrid;
