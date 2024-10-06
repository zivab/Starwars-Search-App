import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Person } from '@/app/types';
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

interface CategoryPageCreateCharacter {
  isCreateDialogOpen: boolean;
  setIsCreateDialogOpen: (isOpen: boolean) => void;
  handleSubmitCreate: UseFormHandleSubmit<Person>;
  handleCreate: (data: Person) => void;
  personFields: { key: keyof Person; label: string }[];
  registerCreate: UseFormRegister<Person>;
  errorsCreate: FieldErrors<Person>;
}

const CategoryPageCreateCharacter = ({
  isCreateDialogOpen,
  setIsCreateDialogOpen,
  handleSubmitCreate,
  handleCreate,
  personFields,
  registerCreate,
  errorsCreate,
}: CategoryPageCreateCharacter) => {
  return (
    <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
      <DialogContent className="flex max-h-[80vh] flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle>Create a new character</DialogTitle>
          <DialogDescription>Enter the following fields to create a new character</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmitCreate(handleCreate)} className="flex flex-grow flex-col">
          <div className="max-h-[50vh] space-y-4 overflow-scroll p-4">
            {personFields.map(({ key, label }) => (
              <div key={key}>
                <Label htmlFor={key}>{label}</Label>
                <Input id={key} {...registerCreate(key as keyof Person)} />
                {errorsCreate[key as keyof Person] && (
                  <p className="mt-1 text-sm text-red-500">{errorsCreate[key as keyof Person]?.message}</p>
                )}
              </div>
            ))}
          </div>
          <DialogFooter className="mt-4">
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryPageCreateCharacter;
