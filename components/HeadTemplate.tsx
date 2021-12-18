import React, { ReactElement } from "react";
import Head from "next/head";

export default function HeadTemplate(): ReactElement {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Sean McDougall</title>

      <meta name="application-name" content="Sean McDougall" />
      <meta
        name="keywords"
        content="portfolio, website, development, programming"
      />
      <meta name="author" content="Sean McDougall" />

      <meta name="HandheldFriendly" content="true" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
