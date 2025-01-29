import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { z } from 'zod';
import { Input } from '../../../components/Input';
import { Segment } from '../../../components/Segment';
import { Textarea } from '../../../components/Textarea';
import css from './index.module.scss';

export const NewIdeaPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      nick: '',
      description: '',
      text: '',
    },
    validate: withZodSchema(
      z.object({
        name: z.string().min(1, 'Name is required'),
        nick: z
          .string()
          .min(1, 'Nick is required')
          .regex(/^[a-z0-9-]+$/, 'Nick can only contain lowercase letters, numbers and dashes'),
        description: z.string().min(1, 'Description is required'),
        text: z.string().min(1, 'Text should be at least 100 characters'),
      }),
    ),
    onSubmit: (values) => {
      console.info('Submitted', values);
    },
  });

  return (
    <Segment title='New Idea'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Input name='name' label='Name' formik={formik} />
        <Input name='nick' label='Nick' formik={formik} />
        <Input name='description' label='Description' formik={formik} />
        <Textarea name='text' label='Text' formik={formik} />
        {!formik.isValid && !!formik.submitCount && <div className={css.error}>Some fields are invalid</div>}
        <button type='submit'>Create Idea</button>
      </form>
    </Segment>
  );
};
