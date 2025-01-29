import { type FormikProps } from 'formik';

export const Input = ({ name, label, formik }: { name: string; label: string; formik: FormikProps<any> }) => {
  const value = formik.values[name];
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        id={name}
        name={name}
        type='text'
        value={value}
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value);
        }}
      />
    </div>
  );
};
