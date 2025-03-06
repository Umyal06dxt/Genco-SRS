import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = ({ onEnterDashboard }: { onEnterDashboard: void }) => {
    const [splineLoaded, setSplineLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [textOpacity, setTextOpacity] = useState(0);

    // Simulate loading progress
    useEffect(() => {
        if (!splineLoaded) {
            const interval = setInterval(() => {
                setLoadingProgress(prev => {
                    const newProgress = prev + Math.random() * 5;
                    return newProgress > 95 ? 95 : newProgress;
                });
            }, 200);

            return () => clearInterval(interval);
        } else {
            setLoadingProgress(100);
        }
    }, [splineLoaded]);

    const handleSplineLoad = () => {
        setSplineLoaded(true);

        // Add delay before showing the button with animation
        setTimeout(() => {
            setShowButton(true);
        }, 800);

        // Gradually fade in text
        setTimeout(() => {
            setTextOpacity(1);
        }, 1200);
    };

    // Particle effect
    useEffect(() => {
        if (splineLoaded) {
            const canvas = document.getElementById('particles') as HTMLCanvasElement;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const particles: Array<{
                x: number;
                y: number;
                size: number;
                speedX: number;
                speedY: number;
                opacity: number;
            }> = [];

            // Create particles
            for (let i = 0; i < 400; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2.5 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.7,
                    speedY: (Math.random() - 0.5) * 0.7,
                    opacity: Math.random() * 0.6 + 0.1
                });
            }

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach(particle => {
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;

                    if (particle.x < 0 || particle.x > canvas.width) {
                        particle.speedX *= -1;
                    }

                    if (particle.y < 0 || particle.y > canvas.height) {
                        particle.speedY *= -1;
                    }

                    ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                });

                requestAnimationFrame(animate);
            };

            animate();

            // Handle window resize
            const handleResize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [splineLoaded]);

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-[#131528]">
            {/* Loading overlay - Improved */}
            {!splineLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-20">
                    <div className="w-64 text-center">
                        <div className="flex items-center justify-center mb-4">
                            <div className="relative w-24 h-24">
                                <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
                                <div
                                    className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-blue-500 border-l-transparent border-b-transparent"
                                    style={{
                                        transform: `rotate(${loadingProgress * 3.6}deg)`,
                                        transition: 'transform 0.3s ease-out'
                                    }}
                                ></div>
                            </div>
                        </div>
                        <p className="text-white text-2xl font-medium mb-2">Loading Experience</p>
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                            <div
                                className="bg-blue-500 h-2 rounded-full transition-all duration-200 ease-out"
                                style={{ width: `${loadingProgress}%` }}
                            ></div>
                        </div>
                        <p className="text-gray-400 text-sm">{Math.floor(loadingProgress)}%</p>
                    </div>
                </div>
            )}

            {/* Particle effect canvas */}
            {splineLoaded && (
                <canvas
                    id="particles"
                    className="absolute inset-0 z-20 pointer-events-none opacity-40"
                ></canvas>
            )}

            {/* Spline 3D scene - takes up full screen */}
            <div className="absolute inset-0 z-10">
                <Spline
                    scene="https://prod.spline.design/Sn2kglZRbEiRan0p/scene.splinecode"
                    onLoad={handleSplineLoad}
                />
            </div>

            {/* Enter Dashboard Button - Added back */}
            {splineLoaded && (
                <div
                    className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-700 ease-out ${showButton
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-16'
                        }`}
                >
                    <button
                        onClick={onEnterDashboard}
                        className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                    >
                        <span className="text-lg">Enter Dashboard</span>
                        <ArrowRight size={20} className="animate-pulse" />
                    </button>
                </div>
            )}

            {/* Subtle hint text */}
            {showButton && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-40 backdrop-blur-sm text-white px-4 py-2 rounded-full z-30 text-sm transition-opacity duration-700 ease-in opacity-70 hover:opacity-100">
                    Click and drag to explore the 3D environment
                </div>
            )}
        </div>
    );
};

export default Hero;
