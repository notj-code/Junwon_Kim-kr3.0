import Head from 'next/head';
import { useRouter } from 'next/router';
import data from '../../data/portfolio.json';

const Seo = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage,
}) => {
  const router = useRouter();
  const defaultTitle = `${data.name} - ${data.headerTaglineOne}`;
  const defaultDescription = data.aboutpara;
  const defaultKeywords =
    'portfolio, blog, web developer, react, nextjs, javascript';
  const siteUrl = 'https://junwonkim-int.netlify.app/';
  const defaultOgImage = `${siteUrl}/images/logo.svg`;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    ogTitle: ogTitle || title || defaultTitle,
    ogDescription: ogDescription || description || defaultDescription,
    ogImage: ogImage || defaultOgImage,
    ogUrl: `${siteUrl}${router.asPath}`,
    twitterCard: twitterCard || 'summary_large_image',
    twitterTitle: twitterTitle || title || defaultTitle,
    twitterDescription:
      twitterDescription || description || defaultDescription,
    twitterImage: twitterImage || ogImage || defaultOgImage,
  };

  return (
    <Head>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-FXZ35BV5QG"></script>
      <script>
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FXZ35BV5QG');`
        }
      </script>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:url" content={seo.ogUrl} />
      <meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={seo.twitterTitle} />
      <meta name="twitter:description" content={seo.twitterDescription} />
      <meta name="twitter:image" content={seo.twitterImage} />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4942977426656768"
     crossOrigin="anonymous"></script>
    </Head>
  );
};

export default Seo;
