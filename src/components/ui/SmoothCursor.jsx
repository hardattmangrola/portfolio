import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SmoothCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("touchmove", (e) => {
            const touch = e.touches[0];
            setMousePosition({
                x: touch.clientX,
                y: touch.clientY
            });
        });

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("touchmove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "rgb(255, 255, 255)",
            mixBlendMode: "difference"
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999]"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999]"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                transition={{
                    type: "spring",
                    stiffness: 1500,
                    damping: 20
                }}
            />
        </>
    );
};

export default SmoothCursor;
