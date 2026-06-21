"use client";

import { useFormState, useFormStatus } from "react-dom";
import { addBookAction } from "@/lib/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition disabled:opacity-60"
    >
      {pending ? "Adding book…" : "Add Book"}
    </button>
  );
}

export default function AddBookForm() {
  const [state, formAction] = useFormState(addBookAction, null);

  return (
    <form action={formAction} className="space-y-5">
      {state?.error && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            name="title"
            required
            placeholder="e.g. The Lean Startup"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Author <span className="text-red-500">*</span>
          </label>
          <input
            name="author"
            required
            placeholder="e.g. Eric Ries"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price ($) <span className="text-red-500">*</span>
          </label>
          <input
            name="price"
            type="number"
            step="0.01"
            min="0"
            required
            placeholder="e.g. 14.99"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            name="category"
            required
            defaultValue=""
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="self-help">Self Help</option>
            <option value="business">Business</option>
            <option value="biography">Biography</option>
            <option value="fiction">Fiction</option>
            <option value="technology">Technology</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cover Image URL
        </label>
        <input
          name="coverImage"
          placeholder="https://... or /books/my-cover.jpg"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <p className="text-xs text-gray-400 mt-1">
          Leave blank to use the default cover.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          rows={4}
          placeholder="A short summary of the book…"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
        />
      </div>

      <SubmitButton />
    </form>
  );
}