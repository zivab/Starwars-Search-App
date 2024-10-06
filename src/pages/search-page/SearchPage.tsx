import { useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { useSearchQuery } from '../../features/search/searchAPI';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import AppLogo from '@/components/AppLogo/AppLogo';
import SearchPageHeader from './components/SearchPageHeader/SearchPageHeader';
import SearchPageInput from './components/SearchPageInput/SearchPageInput';
import SearchPageContent from './components/SearchPageContent/SearchPageContent';

export function SearchPage() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce({ value, delay: 300 });

  const { data, isFetching } = useSearchQuery(debouncedValue, {
    skip: !debouncedValue,
  });

  return (
    <div>
      <Breadcrumbs breadcrumbs="Search" path="/" />
      <div className="flex flex-col items-center justify-center">
        <AppLogo />
        <SearchPageHeader
          title="Starwars Search App"
          description="Search for your favorite Star Wars characters, planets, films, species, vehicles, and starships."
        />
        <SearchPageInput value={value} setValue={setValue} />
        {value !== '' && <SearchPageContent value={value} data={data} isFetching={isFetching} />}
      </div>
    </div>
  );
}

export default SearchPage;
