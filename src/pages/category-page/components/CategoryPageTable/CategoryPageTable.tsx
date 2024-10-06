import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';
import { Person } from '@/app/types';

interface CategoryPageTableProps {
  people: Person[];
  personFields: { key: keyof Person; label: string }[];
  handleEdit: (person: Person) => void;
  handleDelete: (id: string) => void;
}

const CategoryPageTable = ({ people, personFields, handleEdit, handleDelete }: CategoryPageTableProps) => {
  return (
    <div>
      <div className="m-auto mt-5 rounded-xl border border-gray-200 dark:border-gray-200/20">
        <Table>
          <TableHeader>
            <TableRow>
              {personFields.map(({ key, label }) => (
                <TableHead key={key} className="text-slate-600 dark:text-slate-200">
                  {label}
                </TableHead>
              ))}
              <TableHead className="text-slate-600 dark:text-slate-200">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-slate-600 dark:text-slate-400">
            {people.map((person) => (
              <TableRow key={person.id}>
                {personFields.map(({ key }) => (
                  <TableCell key={key}>{person[key as keyof Person]}</TableCell>
                ))}
                <TableCell>
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(person)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(person.id)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">Total Records: {people?.length}</div>
    </div>
  );
};

export default CategoryPageTable;
