export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Loading books...
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-40 bg-gray-200 rounded animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}