import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'HTML & (S)CSS', 'React', 'Vue', 'Node.js', 'WordPress'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Το Κέντρο Λογοθεραπείας ΚΑΝΔΡΗ ΧΡ. ΚΩΝΣΤΑΝΤΙΝΑ αποτελεί ένα σύγχρονο Κέντρο Πρόληψης, Διάγνωσης, Θεραπείας και Αποκατάστασης. 
    Το Κέντρο ξεκίνησε να λειτουργεί το 2010 στον Πύργο Ηλείας, ως ιδιωτικό Κέντρο που απευθύνεται σε παιδιά, εφήβους και ενήλικες με Διαταραχές Επικοινωνίας, 
    Λόγου, Ομιλίας, Φωνής και Μάθησης. Μέσα από την εξειδικευμένη γνώση, την εμπειρία και σε συνεργασία με τις απαραίτητες ειδικότητες όπως νηπιαγωγούς, 
    ειδικούς παιδαγωγούς, εργοθεραπευτή, φυσικοθεραπευτή, ψυχολόγο κ.ά., αλλά και με ιατρικές ειδικότητες, όπως παιδίατρο – αναπτυξιολόγο, παιδονευρολόγο, παιδοψυχίατρο κ.ά., 
    αντιμετωπίζουμε τηναντιμετωπίζουμε κάθε περίπτωση με υπευθυνότητα και ευαισθησία, στοχεύοντας στο καλύτερο δυνατό αποτέλεσμα.</p>

            <p>Τα προγράμματα που σχεδιάζουμε είναι ευέλικτα και εξατομικευμένα, χρησιμοποιώντας τις πιο αποτελεσματικές θεραπευτικές και εκπαιδευτικές μεθόδους. 
    Επιπλέον, το Κέντρο μας συνεργάζεται και ενημερώνει συνεχώς και συστηματικά τους νηπιαγωγούς και δασκάλους των παιδιών, με στόχο την καλύτερη δυνατή ένταξη του παιδιού 
    τόσο στο σχολικό αλλά και κοινωνικό περιβάλλον. </p>
    
    <p>Το Πρότυπο Κέντρο Λογοθεραπείας παρέχει εξειδικευμένα λογοθεραπευτικά προγράμματα σε παιδιά και ενήλικες. 
    Κάθε παιδί και κάθε γονιός είναι μοναδικοί, μέσα σε ένα άνετο και φιλικό περιβάλλον προσαρμοσμένο στις ανάγκες των παιδιών και των γονέων, 
    όπου παρέχονται οι πλέον κατάλληλες υπηρεσίες για μια σύντομη, επιτυχή και αποτελεσματική αποκατάσταση.</p>

<p>Στόχος του Κέντρου Λογοθεραπείας είναι η παροχή ολοκληρωμένων υπηρεσιών λογοθεραπείας σε παιδιά και ενήλικες και επιτυγχάνεται μέσα από την 
    εξειδικευμένη γνώση και την άριστη συνεργασία μας με γονείς, παιδιά, συναδέλφους και συναφείς ειδικότητες. Ακολουθήστε μας! </p>
    
            <p>
              Shortly after graduating from{' '}
              <a href="https://www.ccis.northeastern.edu">Northeastern University</a>, I joined the
              engineering team at <a href="https://www.upstatement.com">Upstatement</a> where I work
              on a wide variety of interesting and meaningful projects on a daily basis.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
