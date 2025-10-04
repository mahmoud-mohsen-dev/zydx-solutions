export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-full min-h-svh pt-[calc(64px+40px)] lg:pt-[calc(84px+40px)]">
      <div className="container flex-1">{children}</div>
    </section>
  );
}
