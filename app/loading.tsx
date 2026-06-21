export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 animate-pulse">
      <div className="h-6 w-40 bg-gray-200 mb-6 rounded" />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-40 bg-gray-200 rounded"
          />
        ))}
      </div>
    </div>
  );
}