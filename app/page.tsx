export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="text-4xl font-bold mb-4 text-primary">
        Portfolio <span className="text-secondary">v1</span>
      </h1>
      <p className="text-xl text-text-secondary max-w-lg mx-auto">
        Cyberpunk Minimal Aesthetic. Foundation established.
      </p>
      <div className="mt-12 flex gap-4 justify-center">
        <div className="w-16 h-16 bg-primary/20 border border-primary rounded flex items-center justify-center text-primary">
          TS
        </div>
        <div className="w-16 h-16 bg-secondary/20 border border-secondary rounded flex items-center justify-center text-secondary">
          TW
        </div>
        <div className="w-16 h-16 bg-tertiary/20 border border-tertiary rounded flex items-center justify-center text-tertiary">
          NX
        </div>
      </div>
    </main>
  );
}
