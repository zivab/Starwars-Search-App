import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  height: yup.number().required('Height is required'),
  mass: yup.number().required('Mass is required'),
  hair_color: yup.string().required('Hair color is required'),
  skin_color: yup.string().required('Skin color is required'),
  eye_color: yup.string().required('Eye color is required'),
  birth_year: yup.string().required('Birth year is required'),
  gender: yup.string().required('Gender is required'),
});
