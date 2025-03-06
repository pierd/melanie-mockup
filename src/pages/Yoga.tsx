import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  background-color: var(--yoga-primary);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid var(--text-tertiary);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: var(--yoga-primary);
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, background-color 0.2s ease;
  border: 1px solid var(--text-secondary);

  &:hover {
    transform: translateY(-2px);
    background-color: var(--massage-light);
  }
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBlock = styled.div`
  background-color: var(--yoga-light);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: var(--text-secondary);
  border-left: 3px solid var(--yoga-deep);

  h2 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
`;

const Image = styled.div`
  background-color: var(--massage-light);
  height: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  color: var(--yoga-deep);
  border: 2px dashed var(--yoga-primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BenefitsBlock = styled(InfoBlock)`
  background-color: var(--massage-light);
  border-left: 3px solid var(--yoga-primary);
`;

const ClassesBlock = styled(InfoBlock)`
  background-color: white;
  border: 1px solid var(--yoga-light);
`;

const ColorPaletteSection = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-top: 3px solid var(--text-tertiary);
`;

const PaletteTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--yoga-deep);
`;

const ColorsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ColorSwatch = styled.div<{ bgColor: string; textColor?: string }>`
  width: 150px;
  height: 100px;
  background-color: ${props => props.bgColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.textColor || 'white'};
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ColorValue = styled.div`
  font-family: monospace;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const NeutralPaletteNote = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: var(--massage-light);
  border-radius: 8px;
  font-style: italic;
  color: var(--text-secondary);
`;

const YogaPage = () => {
  return (
    <Container>
      <Header>
        <Title>Yoga Services</Title>
        <p>Find balance, strength, and inner peace through our specialized yoga classes</p>
        <BackButton to="/">Back to Home</BackButton>
      </Header>

      <Content>
        <InfoBlock>
          <h2>Our Yoga Philosophy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
            rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          </p>
          <p>
            Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus
            luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
            at interdum magna augue eget diam.
          </p>
        </InfoBlock>

        <Image>
          [Yoga Image Placeholder]
        </Image>

        <ClassesBlock>
          <h2>Class Types</h2>
          <ul>
            <li>Hatha Yoga</li>
            <li>Vinyasa Flow</li>
            <li>Restorative Yoga</li>
            <li>Prenatal Yoga</li>
            <li>Meditation Sessions</li>
          </ul>
        </ClassesBlock>

        <BenefitsBlock>
          <h2>Benefits</h2>
          <p>
            Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.
            Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor,
            sem massa mattis sem, at interdum magna augue eget diam.
          </p>
        </BenefitsBlock>
      </Content>

      <ColorPaletteSection>
        <PaletteTitle>Sage Green Palette</PaletteTitle>
        <p>Our yoga services are represented by calming sage green tones, promoting balance and tranquility.</p>

        <ColorsRow>
          <ColorSwatch bgColor="var(--yoga-primary)">
            Primary
            <ColorValue>#6B7355</ColorValue>
          </ColorSwatch>

          <ColorSwatch bgColor="var(--yoga-light)" textColor="#333">
            Light
            <ColorValue>#9CA383</ColorValue>
          </ColorSwatch>

          <ColorSwatch bgColor="var(--yoga-deep)">
            Deep
            <ColorValue>#3C4228</ColorValue>
          </ColorSwatch>
        </ColorsRow>

        <NeutralPaletteNote>
          This page also incorporates neutral beige tones and black accents for a balanced design.
        </NeutralPaletteNote>
      </ColorPaletteSection>
    </Container>
  );
};

export default YogaPage;
