import type { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="flex h-[calc(100vh-6rem)] items-center justify-center">
      <div className="rounded-xl border border-forest bg-[--color-bg] p-8 text-center shadow-sm">
        <h2 className="mb-2 font-[--font-display] text-4xl text-forest">
          Hello Kråksjö
        </h2>
        <p className="text-lg">
          Your Tailwind 4.1 + Bun + Vite setup is perfect.
        </p>
        <button
          type="button"
          className="mt-4 bg-forest px-4 py-2 font-medium text-white hover:bg-forest/80"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default HomePage;