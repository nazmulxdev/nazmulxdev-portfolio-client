import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const orbs = [
      {
        xBase: 0.08,
        yBase: 0.0,
        xAmp: 0.04,
        yAmp: 0.06,
        speed: 0.00008,
        phase: 0,
        r: 0.55,
        color: "0,255,148",
        alpha: 0.055,
      },
      {
        xBase: 0.88,
        yBase: 0.1,
        xAmp: 0.04,
        yAmp: 0.05,
        speed: 0.00006,
        phase: 2.1,
        r: 0.45,
        color: "0,209,255",
        alpha: 0.04,
      },
      {
        xBase: 0.5,
        yBase: 0.92,
        xAmp: 0.05,
        yAmp: 0.04,
        speed: 0.00007,
        phase: 4.3,
        r: 0.5,
        color: "80,60,255",
        alpha: 0.035,
      },
    ];

    const draw = () => {
      time++;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      // ── Base ──────────────────────────────────────────────────────────────
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, W, H);

      // ── Orbs ─────────────────────────────────────────────────────────────
      orbs.forEach((orb) => {
        const t = time * orb.speed;
        const cx = (orb.xBase + Math.sin(t + orb.phase) * orb.xAmp) * W;
        const cy = (orb.yBase + Math.cos(t * 0.7 + orb.phase) * orb.yAmp) * H;
        const radius = orb.r * Math.max(W, H);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(${orb.color},${orb.alpha})`);
        grad.addColorStop(0.5, `rgba(${orb.color},${orb.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(${orb.color},0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Top edge green glow (accent line) ─────────────────────────────────
      const topGlow = ctx.createLinearGradient(0, 0, 0, H * 0.25);
      topGlow.addColorStop(0, "rgba(0,255,148,0.04)");
      topGlow.addColorStop(1, "rgba(0,255,148,0)");
      ctx.fillStyle = topGlow;
      ctx.fillRect(0, 0, W, H * 0.25);

      // ── Vignette (keeps edges dark, content readable) ─────────────────────
      const vig = ctx.createRadialGradient(
        W * 0.5,
        H * 0.45,
        H * 0.1,
        W * 0.5,
        H * 0.45,
        H * 0.85,
      );
      vig.addColorStop(0, "rgba(3,7,18,0)");
      vig.addColorStop(1, "rgba(3,7,18,0.75)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* Canvas — slow drifting orbs */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Noise texture overlay — adds grain/depth like Linear.app */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          opacity: 0.025,
        }}
        aria-hidden="true"
      />

      {/* Subtle grid — very faint, like Vercel dashboard */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default AnimatedBackground;
