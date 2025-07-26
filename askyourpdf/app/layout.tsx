export const metadata = {
  title: "AskYourPDF",
  description: "Chat with your PDFs instantly using AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
