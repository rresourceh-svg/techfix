import { ShieldIcon } from "../icons";

// Caution/warning callout used inside article bodies — e.g. before a step
// that risks data loss, or a reminder to back up before opening a case.
function WarningBox({ title = "Before you continue", children }) {
  return (
    <div className="kb-warning-box">
      <ShieldIcon className="kb-warning-box-icon" />
      <div>
        {title && <p className="kb-warning-box-title">{title}</p>}
        <div className="kb-warning-box-body">{children}</div>
      </div>
    </div>
  );
}

export default WarningBox;
