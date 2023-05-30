const Button = (props) => {
  const { className, buttonText } = props;

  return <button className={`button $[className}`}>{buttonText}</button>;
};

const element = (
  <div className="button-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <button buttonText="Like" className="Like-button" />
        <button buttonText="Comment" className="Comment-button" />
        <button buttonText="Share" className="Share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
