// Numbered step-by-step instructions block for article content, e.g.
// "How to check startup programs in Task Manager".
function StepList({ steps = [] }) {
  return (
    <ol className="kb-step-list">
      {steps.map((step, index) => (
        <li key={index} className="kb-step-list-item">
          <span className="kb-step-list-num">{index + 1}</span>
          <div className="kb-step-list-text">{step}</div>
        </li>
      ))}
    </ol>
  );
}

export default StepList;
