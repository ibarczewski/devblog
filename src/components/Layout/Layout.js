// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage? :string
};

const Layout = ({
  children,
  title,
  description,
  socialImage
}: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = url + withPrefix(metaImage);
  const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
  }
  const lightTheme = {
    body: '#FFFFFF',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)'
  }
  const isDarkModeToggled = useSelector(state => state.isNightModeToggled);
  console.log(isDarkModeToggled);

  return (
    <ThemeProvider theme={isDarkModeToggled ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className={styles.layout}>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:site_name" content={title} />
          <meta property="og:image" content={metaImageUrl} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={metaImageUrl} />
        </Helmet>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
