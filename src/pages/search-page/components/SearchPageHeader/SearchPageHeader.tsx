interface SearchPageHeader {
  title: string;
  description: string;
}

const SearchPageHeader = ({ title, description }: SearchPageHeader) => {
  return (
    <>
      <h1 className="mb-4 mt-3 w-fit bg-gradient-to-r from-[#2d4d59] to-[#6d28d9] bg-clip-text font-poppins text-3xl font-semibold text-transparent dark:from-slate-300/90 dark:to-[#6d28d9]/80">
        {title}
      </h1>
      <p className="mb-8 text-sm font-normal leading-5 tracking-[-0.084px] text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </>
  );
};

export default SearchPageHeader;
