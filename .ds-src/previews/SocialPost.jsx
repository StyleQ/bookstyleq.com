const { SocialPost } = window.StyleQ;

export function DarkPainPoint() {
  return (
    <SocialPost
      variant="dark"
      tag="The Chokehold Problem"
      tagTone="teal"
      headline="&ldquo;You have one option, and you’re at their mercy.&rdquo;"
      sub="Sound familiar? There’s a better way to run salon days."
    />
  );
}
export function LightSolution() {
  return (
    <SocialPost
      variant="light"
      tag="The Only Filter That Matters"
      tagTone="teal"
      headline="Does this create work — or solve problems?"
    />
  );
}
export function TealProof() {
  return (
    <SocialPost
      variant="teal"
      tag="Zero Lift For Your Team"
      headline="We handle scheduling, supplies, and every stylist relationship — your staff doesn’t lift a finger."
    />
  );
}
export function StatCard() {
  return (
    <SocialPost
      variant="light"
      stat="60"
      sub="days notice is your window. We’ll help you plan your pilot before it opens."
    />
  );
}
export function GradientClose() {
  return (
    <SocialPost
      variant="gradient"
      tag="Start Small, See Fast"
      headline="Pilot in your most acute unit. No contract required to start."
      footer="Book a Consultation → bookstyleq.com"
    />
  );
}
