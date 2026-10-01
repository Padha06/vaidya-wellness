export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-4 py-12">
      <div className="mx-auto h-8 w-64 rounded bg-stone-200" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-2xl border border-stone-200 bg-white p-4">
            <div className="h-44 rounded-xl bg-stone-200" />
            <div className="mt-4 h-4 w-3/4 rounded bg-stone-200" />
            <div className="mt-2 h-4 w-1/2 rounded bg-stone-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
