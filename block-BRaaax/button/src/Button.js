function Button(props) {
  function getStyles() {
    let { type, size } = props;
    return `button button--${type} button--${size}`;
  }
  return <button className={getStyles()}>{props.label || "Button"}</button>;
}

export default Button;
