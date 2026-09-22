import "./globals.css";

export const metadata = {
  title: "Order Tracking",
  description: "Mobile order tracking screen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
