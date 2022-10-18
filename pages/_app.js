import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// import "../styles/globals.css";
// import { NextUIProvider } from "@nextui-org/react";

// function MyApp({ Component, pageProps }) {
//   return (
//     <NextUIProvider>
//       <Component {...pageProps} />
//     </NextUIProvider>
//   );
// }

// export default MyApp;
