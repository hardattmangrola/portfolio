import { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        let time = 0;

        const draw = () => {
            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const gap = 15; // Space between dots
            const cols = Math.ceil(canvas.width / gap);
            const rows = Math.ceil(canvas.height / gap);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * gap;
                    const y = j * gap;

                    // Create a wave effect based on position and time
                    // Using sine waves to simulate the "texture gradient" curves
                    const dist = Math.sqrt((i - cols / 2) ** 2 + (j - rows / 2) ** 2);

                    // Complex wave function for the organic gradient texture look
                    const wave1 = Math.sin(x * 0.01 + time * 0.5 + y * 0.01);
                    const wave2 = Math.cos(x * 0.02 - time * 0.3 + y * 0.02);
                    const wave3 = Math.sin(dist * 0.05 - time);

                    const value = (wave1 + wave2 + wave3) / 3;

                    // Map value to dot size and opacity
                    // We want white/greyish dots
                    const size = Math.max(0.5, (value + 1) * 1.5); // size between 0.5 and 3
                    const opacity = Math.max(0.1, (value + 1) * 0.5); // Opacity variation

                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.3})`; // Low opacity white
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            time += 0.02;
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
};

export default Background;
