const Button = (props) => {
  const { type, className, text } = props;

  return (
    <button type={type} className={className}>
      {/* Use React Composition to render children components */}
      {props.children}
      <span>{text}</span>
    </button>
  );
};

export default Button;
