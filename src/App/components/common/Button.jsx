const Button = ({ classes, children, ...props }) => {
  return (
    <button className={`${classes}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
