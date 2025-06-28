const GlowingAvatar = ({ src, alt = "Profile" }) => {
  return (
    <div className="relative w-48 h-48 mx-auto">
      {/* Segmented spinning ring */}
      <div
        className="absolute inset-0 rounded-full blur-md opacity-60"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #00ff94 0deg, transparent 90deg, #00ff94 180deg, transparent 270deg, #00ff94 360deg)",
          animation: "spin 12s linear infinite",
        }}
      />

      {/* Pulsing glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: "#00ff94",
          opacity: 0.12,
          filter: "blur(40px)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      />

      {/* Avatar image */}
      <div className="relative z-10 overflow-hidden rounded-full border-[3px] border-[#00ff94] shadow-[0_0_20px_#00ff94]">
        <img
          src={src}
          alt={alt}
          className="w-48 h-48 object-cover grayscale hover:grayscale-0 transition duration-300"
        />
      </div>

      {/* Custom keyframes (inline) */}
      <style jsx="true">{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.12;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.08);
          }
        }
      `}</style>
    </div>
  );
};

export default GlowingAvatar;
