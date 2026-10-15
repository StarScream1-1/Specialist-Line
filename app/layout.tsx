import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title:
    "Specialist Line: Your Cost-Effective Virtual Assistance & Call Center Solutions",
  description:
    "Specialist Line offers exceptional call center services and virtual assistance to streamline your business operations. From customer support to lead generation, we provide cost-effective solutions tailored to your needs. Partner with us for 24/7 support and expert training, ensuring your business thrives without the overhead costs. Contact us today to elevate your customer experience!",
  keywords: [
    "Specialist Line",
    "call center services",
    "virtual assistance",
    "customer support outsourcing",
    "lead generation services",
    "B2B lead generation",
    "B2C customer care",
    "technical support services",
    "inbound and outbound calling",
    "telemarketing solutions",
    "cost-effective business support",
    "24/7 customer service",
    "professional virtual assistants",
    "back office support",
    "social media management",
    "business growth strategies",
    "expert training and coaching",
  ],
  authors: [{ name: "Specialist Line" }],
  metadataBase: new URL("https://specialistline.com"),
  openGraph: {
    title:
      "Specialist Line: Your Cost-Effective Virtual Assistance & Call Center Solutions",
    description:
      "Specialist Line offers exceptional call center services and virtual assistance to streamline your business operations. From customer support to lead generation, we provide cost-effective solutions tailored to your needs.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}