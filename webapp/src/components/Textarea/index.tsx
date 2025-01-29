import { type FormikProps } from 'formik';

export const Textarea = ({ name, label, formik }: { name: string; label: string; formik: FormikProps<any> }) => {
  const value = formik.values[name];
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value);
        }}
      />
    </div>
  );
};
