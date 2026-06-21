export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 animate-pulse">
      {/* Page title skeleton */}
      <div className="h-8 w-48 bg-gray-200 rounded mb-2" />
      <div className="h-4 w-32 bg-gray-100 rounded mb-8" />

      {/* Book card skeletons — dimensions match real BookCard */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            {/* Cover image area */}
            <div className="h-[240px] w-full rounded-xl bg-gray-200" />
            {/* Title */}
            <div className="mt-3 h-4 w-3/4 bg-gray-200 rounded" />
            {/* Author + price row */}
            <div className="mt-2 flex justify-between">
              <div className="h-3 w-1/2 bg-gray-100 rounded" />
              <div className="h-3 w-10 bg-gray-100 rounded" />
            </div>
            {/* Stars */}
            <div className="mt-2 h-3 w-20 bg-gray-100 rounded" />
            {/* Description */}
            <div className="mt-2 space-y-1">
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-3 w-2/3 bg-gray-100 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}