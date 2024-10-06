import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { categories } from '@/features/search/searchAPI';
import Spinner from '@/components/Spinner/Spinner';

interface SearchPageContent {
  value: string;
  data: Record<string, any[]> | undefined;
  isFetching: boolean;
}

const SearchPageContent = ({ value, data, isFetching }: SearchPageContent) => {
  const hasResults = data && Object.values(data).some((category) => category.length > 0);
  const noResults = data && Object.values(data).every((category) => category.length === 0);

  return (
    <div className="z-50 h-fit max-h-[500px] w-[580px] overflow-y-auto rounded-lg border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
      {value === '' && (
        <div className="mt-2 text-center text-sm text-slate-500/80 dark:text-slate-400">
          Start typing to search for your favorite Star Wars characters, planets, films, species, vehicles, and
          starships.
        </div>
      )}
      {noResults && value !== '' && (
        <div className="mt-2 text-center text-slate-500 dark:text-slate-400">There are no results for this search</div>
      )}

      {isFetching && <Spinner />}

      {!isFetching && hasResults && value !== '' && (
        <>
          {categories.map(
            (category) =>
              data[category] &&
              data[category].length > 0 && (
                <div key={category} className="mb-4 rounded-lg border p-2 last:m-0">
                  <div className="flex items-center justify-between">
                    <div className="ml-3 text-sm font-semibold capitalize text-slate-600 dark:text-slate-200">
                      {category}:
                    </div>
                    <Link to={`/category/${category}`}>
                      <Button variant="link">View All</Button>
                    </Link>
                  </div>
                  {data[category].map((result: any, index: number) => (
                    <div className="my-2 ml-7 text-sm font-normal text-slate-600 dark:text-slate-200" key={result.url}>
                      {index + 1}. {result.name || result.title}
                    </div>
                  ))}
                </div>
              ),
          )}
        </>
      )}
    </div>
  );
};

export default SearchPageContent;
