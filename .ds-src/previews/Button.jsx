const { Button } = window.StyleQ;

export function Primary() {
  return <Button variant="primary">Book a Consultation</Button>;
}
export function Outline() {
  return <Button variant="outline">Explore Services</Button>;
}
export function Teal() {
  return <Button variant="teal">Partner with StyleQ</Button>;
}
export function OnGradient() {
  return (
    <div style={{ background: 'linear-gradient(120deg,#74508F,#C65B89)', padding: 30, borderRadius: 12, display: 'inline-block' }}>
      <Button variant="on-gradient">Book a Consultation</Button>
    </div>
  );
}
export function PrimaryAndSecondary() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button variant="primary">Book a Consultation</Button>
      <Button variant="outline">Explore Services</Button>
    </div>
  );
}
