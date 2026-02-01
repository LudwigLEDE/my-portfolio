import MetallicPaint from "./MetallicPaint";

export default function MetallicLogo() {
  // A Hexagon SVG shape with black fill (required for the shader)
  const logoDataUri = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMDAgMjVMMTc1IDY4LjNWMTU0LjlMMTAwIDE5OC4zTDI1IDE1NC45VjY4LjNMMTAwIDI1WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+";

  return (
    // Wrapper div handles size and positioning logic
    <div className="w-16 h-16 sm:w-20 sm:h-20 hover:scale-110 transition-transform duration-300">
      <MetallicPaint
        imageSrc={logoDataUri}
        // Pattern
        seed={42}
        scale={4}
        patternSharpness={1}
        noiseScale={0.5}
        // Animation
        speed={0.3}
        liquid={0.75}
        mouseAnimation={false}
        // Visual
        brightness={2}
        contrast={0.5}
        refraction={0.01}
        blur={0.015}
        chromaticSpread={2}
        fresnel={1}
        angle={0}
        waveAmplitude={1}
        distortion={1}
        contour={0.2}
        // Colors
        lightColor="#ffffff"
        darkColor="#000000"
        tintColor="#feb3ff"
      />
    </div>
  );
}