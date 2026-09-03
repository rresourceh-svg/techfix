import { UserGearIcon } from "../icons";

// "When should you get professional help?" section used inside article
// bodies — sits between the how-to content and the closing CTA, framing
// specific situations where diagnosis beats more DIY guesswork.
function ProHelpSection({ title = "When should you get professional help?", children }) {
  return (
    <section className="kb-pro-help">
      <div className="kb-pro-help-icon-wrap">
        <UserGearIcon className="kb-pro-help-icon" />
      </div>
      <div>
        <h2>{title}</h2>
        <div className="kb-pro-help-body">{children}</div>
      </div>
    </section>
  );
}

export default ProHelpSection;
