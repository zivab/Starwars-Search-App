import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CategoryPageHeaderProps {
  title: string;
  setIsCreateDialogOpen: (isOpen: boolean) => void;
}

const CategoryPageHeader = ({ title, setIsCreateDialogOpen }: CategoryPageHeaderProps) => {
  return (
    <div className="mt-10 flex items-center justify-between">
      <h1 className="w-fit bg-gradient-to-r from-[#2d4d59] to-[#6d28d9] bg-clip-text font-poppins text-3xl font-semibold text-transparent dark:from-slate-300/90 dark:to-[#6d28d9]/80">
        {title}
      </h1>
      <Button onClick={() => setIsCreateDialogOpen(true)}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create
      </Button>
    </div>
  );
};

export default CategoryPageHeader;
