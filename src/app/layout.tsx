import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Head, Main, NextScript } from 'next/document';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clínica Especializada Dr. Haroldo Peixoto | Psiquiatria e Psicoterapia",
  description:
    "A Clínica Dr. Haroldo Peixoto oferece atendimento psiquiátrico e psicoterápico com excelência, empatia e profissionalismo. Especialista em saúde mental, qualidade de vida e bem-estar emocional.",
  keywords: [
    "psiquiatra",
    "psiquiatria",
    "psicoterapia",
    "saúde mental",
    "Haroldo Peixoto",
    "tratamento depressão",
    "ansiedade",
    "TDAH",
    "bipolaridade",
    "Goiania psiquiatra"
  ],
  authors: [{ name: "Dr. Haroldo Peixoto" }],
  creator: "Dr. Haroldo Peixoto",
  metadataBase: new URL("https://haroldopeixoto.com.br"),
  openGraph: {
    title: "Clínica Especializada Dr. Haroldo Peixoto",
    description:
      "Especialista em Psiquiatria e Psicoterapia. Atendimento humano, empático e profissional.",
    url: "https://haroldopeixoto.com.br",
    siteName: "Clínica Dr. Haroldo Peixoto",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Dr. Haroldo Peixoto",
    description:
      "Atendimento especializado em saúde mental com o Dr. Haroldo Peixoto, psiquiatra em Goiânia.",
    creator: "@haroldopeixoto",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
      <Main />
        <NextScript />
    </html>
  );
}
