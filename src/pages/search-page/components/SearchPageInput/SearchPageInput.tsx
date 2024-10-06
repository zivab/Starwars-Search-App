import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchPageInput {
  value: string;
  setValue: (value: string) => void;
}

const SearchPageInput = ({ value, setValue }: SearchPageInput) => {
  return (
    <div className="mb-2">
      <div className="border-neutrals-grey-300 flex items-center gap-2 rounded-lg border px-2 py-1">
        <Search className="h-4 w-4 text-slate-600" />
        <Input
          className="w-96 border-none pl-1 outline-none placeholder:text-slate-400 focus:border-transparent focus:ring-0"
          type="text"
          placeholder="Search Star Wars..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value !== '' && (
          <div
            className="text-grey-grey-600 hover:bg-primary-600 group flex items-center rounded-md border bg-gray-200 px-1 hover:cursor-pointer hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500"
            onClick={() => setValue('')}
          >
            <p className="text-xs">Clear</p>
            <X className="h-4 w-4" />
          </div>
        )}
      </div>
    </div>
    // </PopoverTrigger>
  );
};

export default SearchPageInput;
