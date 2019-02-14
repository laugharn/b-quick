import "../styles/index.css";

import App, { Container } from "next/app";
import Link from "next/link";
import React from "react";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    const pages = [
      {
        href: "/",
        title: "Next 1"
      },
      {
        href: "/n2",
        title: "Next 2"
      },
      {
          href: '/user/dan',
          title: 'Next 3'
      },
      {
        href: '/h1',
        title: 'Hooks 1'
      },
      {
        href: '/h2',
        title: 'Hooks 2'
      },
      {
        href: '/h3',
        title: 'Hooks 3'
      },
      {
        href: '/h4',
        title: 'Hooks 4'
      },
      {
        href: '/t1',
        title: 'Tailwind 1'
      }
    ];

    return (
      <Container>
        <div>
          <div className="p-3">
            {pages.map(page => {
              return (
                <Link href={page.href} key={page.title}>
                  <a className="mr-3">{page.title}</a>
                </Link>
              );
            })}
          </div>
          <div className="p-3">
            <Component {...pageProps} />
          </div>
        </div>
      </Container>
    );
  }
}

export default MyApp;
