import React, { FC } from "react";

const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`: "";
};

interface ConverterProps {
  valid: string | null;
  form: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Converter: FC<ConverterProps> = ({ valid, form, handleChange }) => {
  return (
    <div className="container">
      <input
        className="input"
        name="backgroundColor"
        value={form}
        onChange={handleChange}
      />
      <div className="output">
        {valid ? `rgb (${hexToRgb(valid)})` : "Ошибка!"}
      </div>
    </div>
  );
};

export default Converter;
