import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import { useGetPeopleQuery } from '@/features/search/searchAPI';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Person } from '@/app/types';
import CategoryPageHeader from './components/CategoryPageHeader/CategoryPageHeader';
import Spinner from '@/components/Spinner/Spinner';
import CategoryPageTable from './components/CategoryPageTable/CategoryPageTable';
import CategoryPageEditCharacter from './components/CategoryPageEditCharacter/CategoryPageEditCharacter';
import CategoryPageCreateCharacter from './components/CategoryPageCreateCharacter/CategoryPageCreateCharacter';
import AppLogo from '@/components/AppLogo/AppLogo';
import { schema } from '@/utils/validators';
import { useParams } from 'react-router-dom';

const personFields = [
  { key: 'name', label: 'Name' },
  { key: 'height', label: 'Height' },
  { key: 'mass', label: 'Mass' },
  { key: 'hair_color', label: 'Hair Color' },
  { key: 'skin_color', label: 'Skin Color' },
  { key: 'eye_color', label: 'Eye Color' },
  { key: 'birth_year', label: 'Birth Year' },
  { key: 'gender', label: 'Gender' },
] as const;

function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [people, setPeople] = useState<Person[]>([]);
  const [editingPerson, setEditingPerson] = useState<Person | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const { data: peopleData, isLoading: isPeopleLoading } = useGetPeopleQuery();
  const { toast } = useToast();

  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    formState: { errors: errorsEdit },
    reset: resetEdit,
    setValue: setValueEdit,
  } = useForm<Person>({
    resolver: yupResolver(schema),
  });

  const {
    register: registerCreate,
    handleSubmit: handleSubmitCreate,
    formState: { errors: errorsCreate },
    reset: resetCreate,
  } = useForm<Person>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (peopleData) {
      const peopleWithIds = peopleData.results.map((person, index) => ({
        ...person,
        id: `person-${index}`,
      }));
      setPeople(peopleWithIds);
    }
  }, [peopleData]);

  const handleDelete = (id: string) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const handleEdit = (person: Person) => {
    setEditingPerson(person);
    setIsEditDialogOpen(true);
    personFields.forEach(({ key }) => {
      setValueEdit(key as keyof Person, person[key as keyof Person]);
    });
  };

  const handleSaveEdit = (data: Person) => {
    if (editingPerson) {
      setPeople(people.map((p) => (p.id === editingPerson.id ? { ...p, ...data } : p)));
      setIsEditDialogOpen(false);
      setEditingPerson(null);
      resetEdit();
      toast({
        title: 'Success',
        variant: 'success',
        description: 'Person was saved successfully',
        duration: 3000,
      });
    }
  };

  const handleCreate = (data: Person) => {
    const newPerson = {
      ...data,
      id: `person-${people.length}`,
    };
    setPeople([newPerson, ...people]);
    setIsCreateDialogOpen(false);
    resetCreate();
    toast({
      title: 'Success',
      variant: 'success',
      description: `New person ${data.name} was added successfully`,
      duration: 3000,
    });
  };

  return (
    <>
      <Breadcrumbs breadcrumbs={`Category: ${category}`} path={`/category/${category}`} />
      <AppLogo />
      <CategoryPageHeader title={`Category: ${category}`} setIsCreateDialogOpen={setIsCreateDialogOpen} />
      {category === 'people' ? (
        <>
          {isPeopleLoading && <Spinner />}
          {!isPeopleLoading && people.length === 0 && (
            <div className="mt-20 text-center text-slate-600 dark:text-slate-400">No Rows Found</div>
          )}
          {!isPeopleLoading && people.length > 0 && (
            <CategoryPageTable
              people={people}
              personFields={personFields}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}
          <CategoryPageEditCharacter
            isEditDialogOpen={isEditDialogOpen}
            setIsEditDialogOpen={setIsEditDialogOpen}
            editingPerson={editingPerson}
            personFields={personFields}
            registerEdit={registerEdit}
            errorsEdit={errorsEdit}
            handleSubmitEdit={handleSubmitEdit}
            handleSaveEdit={handleSaveEdit}
          />
          <CategoryPageCreateCharacter
            isCreateDialogOpen={isCreateDialogOpen}
            setIsCreateDialogOpen={setIsCreateDialogOpen}
            handleSubmitCreate={handleSubmitCreate}
            handleCreate={handleCreate}
            personFields={personFields}
            registerCreate={registerCreate}
            errorsCreate={errorsCreate}
          />
        </>
      ) : (
        <div className="mt-20 text-center text-slate-600 dark:text-slate-400">
          This category is not implemented yet.
        </div>
      )}
      <Toaster />
    </>
  );
}

export default CategoryPage;
