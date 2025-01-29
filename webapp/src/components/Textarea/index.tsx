export const Textarea = ({
  name,
  label,
  state,
  setState,
}: {
  name: string;
  label: string;
  state: Record<string, any>;
  setState: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <textarea
        id={name}
        name={name}
        value={state[name]}
        onChange={(e) => {
          setState({ ...state, [name]: e.target.value });
        }}
      />
    </div>
  );
};
