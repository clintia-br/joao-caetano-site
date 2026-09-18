import { ComponentProps } from "react";

/** Field — a labelled input for the agendamento form. Sober, generous, warm
 *  focus ring; the label is a real <label>, never a placeholder. */
export function Field({
  label,
  hint,
  as = "input",
  required,
  id,
  ...rest
}: {
  label: string;
  hint?: string;
  as?: "input" | "textarea";
  id: string;
} & ComponentProps<"input"> &
  ComponentProps<"textarea">) {
  const describedBy = hint ? `${id}-hint` : undefined;

  return (
    <div className="jc-field">
      <label className="jc-field__label" htmlFor={id}>
        {label}
        {required && (
          <span className="jc-field__required" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          className="jc-field__control"
          required={required}
          aria-describedby={describedBy}
          {...rest}
        />
      ) : (
        <input
          id={id}
          className="jc-field__control"
          required={required}
          aria-describedby={describedBy}
          {...rest}
        />
      )}
      {hint && (
        <span className="jc-field__hint" id={describedBy}>
          {hint}
        </span>
      )}
    </div>
  );
}
