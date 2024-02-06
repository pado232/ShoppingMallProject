const IdBox = ({
  icon: IconComponent,
  inputType,
  inputPlaceholder,
  iconSize,
  inputValue,
  inputRef,
  inputName,
  handleChangeState,
  text,
}) => {
  return (
    <div className="IdBox">
      <div className="login_box">
        {IconComponent && <IconComponent size={iconSize} />}
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          name={inputName}
          value={inputValue}
          onChange={handleChangeState}
          ref={inputRef}
        />
      </div>
      {text}
    </div>
  );
};
export default IdBox;
