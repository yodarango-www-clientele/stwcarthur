// core
import React from "react";
import Link from "next/link";

// components
import Footer from "../components/footer";
import Menu from "../components/menu";

// styles
import aboutPageStyles from "../styles/pages/About.module.css";

const About = () => {
  return (
    <div className={aboutPageStyles.mainWrapper}>
      <Menu />
      <section className={aboutPageStyles.grid}>
        <h1 className={aboutPageStyles.title}>
          WHAT WE <span>BELIELVE</span>
        </h1>
        <div className={aboutPageStyles.image}></div>
        <div className={aboutPageStyles.beliefs}>
          <article className={aboutPageStyles.Bible}>
            <span></span>
            <div>
              <h3>About the Bible</h3>
              <p>
                The Bible is the infallible Word of God and the authority for
                salvation and Christian living. (See II Timothy 3:15-17.)
              </p>
            </div>
          </article>
          <article className={aboutPageStyles.God}>
            <span></span>
            <div>
              <h3>About God</h3>
              <p>
                There is one God, who has revealed Himself as our Father, in His
                Son Jesus Christ, and as the Holy Spirit. Jesus Christ is God
                manifested in flesh. He is both God and man. (See Deuteronomy
                6:4; Ephesians 4:4-6; Colossians 2:9; I Timothy 3:16.)
              </p>
            </div>
          </article>
          <article className={aboutPageStyles.salvation}>
            <span></span>
            <div>
              <h3>About Sin and Salvation</h3>
              <p>
                Everyone has sinned and needs salvation. Salvation comes by
                grace through faith based on the atoning sacrifice of Jesus
                Christ. (See Romans 3:23-25; 6:23; Ephesians 2:8-9.)
              </p>
            </div>
          </article>
          <article className={aboutPageStyles.gospel}>
            <span></span>
            <div>
              <h3>About the Gospel</h3>
              <p>
                The saving gospel is the good news that Jesus died for our sins,
                was buried, and rose again. We obey the gospel (II Thessalonians
                1:8; I Peter 4:17) by repentance (death to sin), water baptism
                in the name of Jesus Christ (burial), and the baptism of the
                Holy Spirit with the initial sign of speaking in tongues as the
                Spirit gives the utterance (resurrection). (See I Corinthians
                15:1-4; Acts 2:4, 37-39; Romans 6:3-4.)
              </p>
            </div>
          </article>
          <article className={aboutPageStyles.living}>
            <span></span>
            <div>
              <h3>About Christian Living</h3>
              <p>
                As Christians we are to love God and others. We should live a
                holy life inwardly and outwardly, and worship God joyfully. The
                supernatural gifts of the Spirit, including healing, are for the
                church today. (See Mark 12:28-31; II Corinthians 7:1; Hebrews
                12:14; I Corinthians 12:8-10.)
              </p>
            </div>
          </article>
          <article className={aboutPageStyles.future}>
            <span></span>
            <div>
              <h3>About the Future</h3>
              <p>
                Jesus Christ is coming again to catch away His church. In the
                end will be the final resurrection and the final judgment. The
                righteous will inherit eternal life, and the unrighteous eternal
                death. (See I Thessalonians 4:16-17; Revelation 20:11-15.)
              </p>
            </div>
          </article>
        </div>
        <Link href='/about-team'>
          <a className={`std-button ${aboutPageStyles.stdButton}`}>
            MINISTRY TEAM
          </a>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default About;
