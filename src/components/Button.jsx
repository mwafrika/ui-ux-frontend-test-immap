const Button = ({ text, onClick, icon, className }) => {
  return (
    <button onClick={onClick} className={className}>
      <h3>{text}</h3>
      {icon}
    </button>
  );
};

export default Button;
