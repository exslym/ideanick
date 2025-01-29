export const Input = ({
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
      <input
        id={name}
        name={name}
        type='text'
        value={state[name]}
        onChange={(e) => {
          setState({ ...state, [name]: e.target.value });
        }}
      />
    </div>
  );
};
