export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>Segundo layout</div>
      {children}
    </div>
  );
}
