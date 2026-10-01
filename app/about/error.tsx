"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <h2 className="font-serif text-3xl text-forest">Something went wrong</h2>
      <p className="mt-2 text-stone-500">Please try again — your booking data is safe.</p>
      <button onClick={reset} className="mt-6 rounded-full bg-forest px-6 py-3 text-sm text-white">
        Try again
      </button>
    </div>
  );
}
