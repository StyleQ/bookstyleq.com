const { NavBar } = window.StyleQ;

export function Default() {
  return (
    <NavBar
      links={[
        { label: 'Services', active: true },
        { label: 'For Facilities' },
        { label: 'Contact' },
      ]}
    />
  );
}
