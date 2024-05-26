const WhiteButton = ({ onClick, buttonText, style }) => {
  return (
    <div className="WhiteButton">
      <button style={style} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};
export default WhiteButton;
