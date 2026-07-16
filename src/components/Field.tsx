type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
};

export function Field({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required,
  error,
  autoComplete,
}: InputProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
        {required && <span className="text-rose-600"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={`input ${error ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200" : ""}`}
      />
      {error && (
        <p id={errorId} className="mt-1 text-xs font-medium text-rose-600">
          {error}
        </p>
      )}
    </div>
  );
}
