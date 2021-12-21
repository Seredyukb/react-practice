import React from "react";
import classes from "./FormsControls.module.css";

export const FormControl = ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;

  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
export const TextArea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...restProps} {...input} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...restProps} {...input} />
    </FormControl>
  );
};
