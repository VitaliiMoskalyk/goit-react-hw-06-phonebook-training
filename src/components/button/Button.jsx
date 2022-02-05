export default function Button({ title, clickFn, step }) {
  return (
    <button type="button" onClick={clickFn}>
      {title}
      {step}
    </button>
  );
}
