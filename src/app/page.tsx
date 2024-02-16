export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-50 p-8 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <h1 className="flex items-center gap-3 text-3xl font-bold before:flex before:h-8 before:w-0.5 before:bg-sky-500 sm:text-xl lg:text-6xl">
        Wello Tailwind!
      </h1>
      <button className="mt-3 rounded-md bg-sky-400 px-4 py-2 font-medium text-white enabled:hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60">
        Sign In
      </button>
    </div>
  )
}
