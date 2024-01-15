export const metadata = {
  title: "AI Tutor",
  description:
    "My App is an english AI tutor, while only providing the subject, the tutor will generate and unseen test.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
