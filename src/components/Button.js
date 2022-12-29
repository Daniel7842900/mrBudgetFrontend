const Button = (props) => {
  const { type, className, text } = props;

  return (
    <button type={type} className={className}>
      {props.children}
      <span>{text}</span>
    </button>
  );
};

export default Button;
