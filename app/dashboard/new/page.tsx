import AddBookForm from "@/components/ui/AddBookForm";

export const metadata = {
  title: "Add New Book | Lumen Books Dashboard",
};

// Server Component — no "use client" here
export default function NewBookPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-bold mb-2">Add a New Book</h1>
      <p className="text-sm text-gray-500 mb-8">
        Fill in the details below. Your listing will appear in the catalog
        immediately after submission.
      </p>
      <AddBookForm />
    </main>
  );
}