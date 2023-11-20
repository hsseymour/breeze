const Label = ({ classes, children, ...props }) => {
  return (
    <label className={`${classes}`} {...props}>
      {children}
    </label>
  );
};

export default Label;
