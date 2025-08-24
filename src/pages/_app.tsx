// pages/_app.tsx
import type { AppProps } from "next/app";
import "@/app/globals.css"; // <- @tailwind base/components/utilities live here

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
