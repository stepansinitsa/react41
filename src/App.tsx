import Converter from './components/Converter';
import { useState, ChangeEvent } from 'react';
import './App.css';

const App: React.FC = () => {
  const maxValue: number = 7;

  const [form, setForm] = useState<string>("");
  const [valid, setValid] = useState<any>(true);

  const RegExp: RegExp = /^#[0-9A-F]{6}$/i;

  const validateValue = (value: string): void =>
    RegExp.test(value) ? setValid(value) : setValid(RegExp.test(value));

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    value.length === maxValue && validateValue(value);
    value.length <= maxValue && setForm(value);
  };

  return (
    <div
      className="App"
      style={valid ? { background: `${valid}` } : { background: "#ff0000" }}
    >
      <Converter
        form={form}
        valid={valid}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;