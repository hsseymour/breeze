const Button = ({ classes = "", children, ...props }) => {
  return (
    <button className={`buttons ${classes}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
