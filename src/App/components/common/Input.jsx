const Input = ({ classes = "", ...props }) => {
  return <input className={`inputs ${classes}`} {...props} />;
};

export default Input;
