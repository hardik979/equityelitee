import { GlowingEffectDemo } from "../ui/BentoGrid";

const WhyUs = () => {
  return (
    <div className="bg-[#0a0f0d]">
      <h1 className="text-5xl md:text-7xl mt-12 font-semibold  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-green-400 underline bg-opacity-50">
        Why To Choose Us ?
      </h1>
      <div className="  bg-[#0a0f0d] z-0">
        {/* Grid glow */}

        <GlowingEffectDemo />
      </div>
    </div>
  );
};

export default WhyUs;
