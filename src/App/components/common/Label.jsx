const Label = ({ classes = "", children, ...props }) => {
  return (
    <label className={`labels ${classes}`} {...props}>
      {children}
    </label>
  );
};

export default Label;
