"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <h2 className="font-serif text-3xl text-forest">Booking hit a snag</h2>
      <button onClick={reset} className="mt-6 rounded-full bg-forest px-6 py-3 text-sm text-white">
        Retry
      </button>
    </div>
  );
}
