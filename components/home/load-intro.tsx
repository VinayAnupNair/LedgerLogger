"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";

export function LoadIntro({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const lenis = useLenis();
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  const [show, setShow] = useState(!reduced);

  useEffect(() => {
    if (reduced) {
      onDoneRef.current();
      return;
    }

    const id = window.setTimeout(() => setShow(false), 2100);
    return () => window.clearTimeout(id);
  }, [reduced]);

  useEffect(() => {
    if (reduced || !lenis) return;
    lenis.stop();
    return () => {
      lenis.start();
    };
  }, [lenis, reduced]);

  if (reduced) return null;

  return (
    <AnimatePresence
      onExitComplete={() => {
        lenis?.start();
        onDoneRef.current();
      }}
    >
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#f4f1ea] px-6 text-center text-[#111111]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.h1
              className="text-[clamp(2.4rem,7vw,5rem)] font-medium leading-[0.95] tracking-[-0.05em]"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            >
              Nirav Rohra
            </motion.h1>
          </div>
          <div className="mt-4 overflow-hidden">
            <motion.p
              className="text-[16px] text-[#111111]/50"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.9,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Don&apos;t make it a thing.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
