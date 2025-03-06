import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  background-color: var(--massage-primary);
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
  color: var(--massage-primary);
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Intro = styled.div`
  padding: 2rem;
  background-color: var(--massage-light);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  h2 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: var(--massage-light);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  color: var(--text-secondary);
  border-top: 3px solid var(--massage-deep);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: var(--massage-deep);
  }
`;

const InfoSection = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
  color: var(--text-secondary);
  border: 1px solid var(--massage-deep);

  h2 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 1rem;
  }
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
  color: var(--massage-deep);
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

const MassagePage = () => {
  return (
    <Container>
      <Header>
        <Title>Massage Therapy</Title>
        <p>Release tension, reduce pain, and restore balance with our therapeutic massage services</p>
        <BackButton to="/">Back to Home</BackButton>
      </Header>

      <Content>
        <Intro>
          <h2>Our Therapeutic Approach</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus
            hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut
            eleifend nibh porttitor. Ut in nulla enim.
          </p>
        </Intro>

        <ServicesGrid>
          <ServiceCard>
            <h3>Swedish Massage</h3>
            <p>
              Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus
              luctus magna. Quisque cursus, metus vitae pharetra auctor.
            </p>
            <p><strong>Duration:</strong> 60/90 min</p>
          </ServiceCard>

          <ServiceCard>
            <h3>Deep Tissue</h3>
            <p>
              Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.
              Integer euismod lacus luctus magna.
            </p>
            <p><strong>Duration:</strong> 60/90 min</p>
          </ServiceCard>

          <ServiceCard>
            <h3>Hot Stone Therapy</h3>
            <p>
              Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              Donec eu libero sit amet quam egestas semper.
            </p>
            <p><strong>Duration:</strong> 75 min</p>
          </ServiceCard>

          <ServiceCard>
            <h3>Prenatal Massage</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Vestibulum tortor quam.
            </p>
            <p><strong>Duration:</strong> 60 min</p>
          </ServiceCard>

          <ServiceCard>
            <h3>Sports Massage</h3>
            <p>
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
              Mauris placerat eleifend leo.
            </p>
            <p><strong>Duration:</strong> 60/90 min</p>
          </ServiceCard>

          <ServiceCard>
            <h3>Aromatherapy</h3>
            <p>
              Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est
              et sapien ullamcorper pharetra.
            </p>
            <p><strong>Duration:</strong> 60 min</p>
          </ServiceCard>
        </ServicesGrid>

        <InfoSection>
          <h2>Benefits of Regular Massage</h2>
          <ul>
            <li>Reduces stress and promotes relaxation</li>
            <li>Relieves muscle tension and pain</li>
            <li>Improves circulation and immune function</li>
            <li>Enhances sleep quality</li>
            <li>Increases flexibility and range of motion</li>
          </ul>
        </InfoSection>

        <ColorPaletteSection>
          <PaletteTitle>Terracotta Palette</PaletteTitle>
          <p>Our massage services are represented by warm terracotta tones, promoting relaxation and comfort.</p>

          <ColorsRow>
            <ColorSwatch bgColor="var(--massage-primary)">
              Primary
              <ColorValue>#A0522D</ColorValue>
            </ColorSwatch>

            <ColorSwatch bgColor="var(--massage-light)">
              Light
              <ColorValue>#C08267</ColorValue>
            </ColorSwatch>

            <ColorSwatch bgColor="var(--massage-deep)">
              Deep
              <ColorValue>#5D3A1A</ColorValue>
            </ColorSwatch>
          </ColorsRow>

          <NeutralPaletteNote>
            This page also incorporates neutral beige tones and black accents for a balanced design.
          </NeutralPaletteNote>
        </ColorPaletteSection>
      </Content>
    </Container>
  );
};

export default MassagePage;
