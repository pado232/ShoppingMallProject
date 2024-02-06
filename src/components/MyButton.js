const MyButton = ({ icon: IconComponent, handleSubmit, buttonText }) => {
  const checkIconSize = 8 * 3;
  return (
    <div className="MyButton">
      <button className="final_btn" onClick={handleSubmit}>
        <span>{buttonText}</span>
        {IconComponent && <IconComponent size={checkIconSize} />}
      </button>
    </div>
  );
};

export default MyButton;
