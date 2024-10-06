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

interface CategoryPageEditCharacter {
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (isOpen: boolean) => void;
  editingPerson: Person | null;
  personFields: { key: keyof Person; label: string }[];
  registerEdit: UseFormRegister<Person>;
  errorsEdit: FieldErrors<Person>;
  handleSubmitEdit: UseFormHandleSubmit<Person>;
  handleSaveEdit: (data: Person) => void;
}

const CategoryPageEditCharacter = ({
  isEditDialogOpen,
  setIsEditDialogOpen,
  editingPerson,
  personFields,
  registerEdit,
  errorsEdit,
  handleSubmitEdit,
  handleSaveEdit,
}: CategoryPageEditCharacter) => {
  return (
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogContent className="flex max-h-[80vh] flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle>Edit character</DialogTitle>
          <DialogDescription>Enter the following fields to edit the character</DialogDescription>
        </DialogHeader>
        {editingPerson && (
          <form onSubmit={handleSubmitEdit(handleSaveEdit)} className="flex flex-grow flex-col">
            <div className="max-h-[50vh] space-y-4 overflow-scroll p-4">
              {personFields.map(({ key, label }) => (
                <div key={key}>
                  <Label htmlFor={key}>{label}</Label>
                  <Input id={key} {...registerEdit(key as keyof Person)} />
                  {errorsEdit[key as keyof Person] && (
                    <p className="mt-1 text-sm text-red-500">{errorsEdit[key as keyof Person]?.message}</p>
                  )}
                </div>
              ))}
            </div>
            <DialogFooter className="mt-4">
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CategoryPageEditCharacter;
