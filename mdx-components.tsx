import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1
        style={{
          color: "zinc",
          fontSize: "48px",
          fontWeight: "bold",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          color: "zinc",
          fontSize: "36px",
          fontWeight: "bold",
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          color: "zinc",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        style={{
          color: "zinc",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p
        style={{
          color: "zinc",
          fontSize: "16px",
        }}
      >
        {children}
      </p>
    ),
    a: ({ children }) => (
      <a
        style={{
          color: "zinc",
          textDecoration: "underline",
          textDecorationStyle: "wavy",
        }}
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code
        style={{
          backgroundColor: "zinc",
          padding: "4px",
          borderRadius: "4px",
        }}
      >
        {children}
      </code>
    ),

    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
