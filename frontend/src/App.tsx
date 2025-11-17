import type { FC } from "react";

const App: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-neutral-50">
      <div className="rounded-xl border border-forest p-8 text-center">
        <h1 className="mb-2 text-4xl font-serif text-forest">Hello KråkSjö</h1>
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

export default App;
