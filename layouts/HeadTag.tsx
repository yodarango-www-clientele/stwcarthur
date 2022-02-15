import Head from "next/head";

type HeadTagProps = {
  key: string;
  title: string;
  description: string;
  ogUrl: string;

}
const HeadTag = ({ key, title, description, ogUrl }: HeadTagProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} key={`${key}-1`} />
      <meta name='robots' content='index, follow' key={`${key}-2`} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0 maximum-scale=1'
        key={key}
      />
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' key={`${key}-2`} />
      <meta
        name='keywords'
        content='Apostolic, Apostolic Church, Pentecostal, Apostolic Pentecostal, FAC Knoxville, Expereince Apostolic, Holy Ghost, Speaking in tongues, baptizing in the name of Jesus Christ, church in knoxville'
        key={key}
      />

      {/* =========================== change this section =========================== */}
      <link rel="icon" type="image/png" href="/images/logo.png" key={`${key}-3`}></link>
      {/* =========================== change this section ============================ */}

      {/* =========================== OG Tags =========================== */}
      <meta name='og:title' content={title} key={`${key}-4`} />
      <meta property='og:url' content={ogUrl} key={`${key}-5`} />
      {/* ********** cahge this ************/}
      <meta property='og:image' content='https://res.cloudinary.com/stecarthur-org/image/upload/v1644941899/logo_fwqzfu.png' key={key} />
      {/*********** cahge this ************/}
      <meta property='og:type' content='website' key={`${key}-6`} />
      <meta property='og:description' content={description} key={`${key}-7`} />
      <meta property='og:locale' content='en_GB' key={`${key}-8`} />
      <meta name='og:site_name' content='FAC Knoxville' key={`${key}-8`} />
      <meta name='og:region' content='TN' key={`${key}-9`} />
      <meta name='og:postal-code' content='37912' key={`${key}-10`} />
      <meta name='og:country-name' content='USA' key={`${key}-11`}/>
      <meta name='blogcatalog' key={`${key}-12`} />
    </Head>
  );
};

export default HeadTag;
