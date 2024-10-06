import { LoaderCircle } from 'lucide-react';

const Spinner = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-2 text-center text-slate-600 dark:text-slate-400">
      <LoaderCircle className="h-10 w-10 animate-spin text-[#6d28d9]" />
      <p className="text-gray-600/70 dark:text-gray-400/80">Loading...</p>
    </div>
  );
};

export default Spinner;
