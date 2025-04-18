import React, { useState } from 'react';

const FormInputs = ({
  label,
  type = 'text',
  name,
  placeholder = '',
  required = false,
  inputClassName = '',
  wrapperClassName = '',
  labelClassName = '',
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className={`mb-3 ${wrapperClassName}`}>
      {label && (
        <label htmlFor={name} className={`form-label  ${labelClassName}`}>
          {label}
        </label>
      )}

      <div className="position-relative">
        <input
          type={isPassword && showPassword ? 'text' : type}
          className={`form-control ${inputClassName}`}
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
        />
        {isPassword && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="position-absolute top-50 end-0 translate-middle-y me-3"
            style={{ cursor: 'pointer', color: '#888' }}
          >
            {showPassword ? (
              <i className="bi bi-eye-slash-fill"></i>
            ) : (
              <i className="bi bi-eye-fill"></i>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormInputs;
