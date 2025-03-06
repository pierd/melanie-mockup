import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Header = styled.header`
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    var(--beige-light) 0%,
    var(--yoga-light) 50%,
    var(--massage-light) 100%
  );
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-top: 5px solid var(--midwifery-primary);
  border-bottom: 5px solid var(--midwifery-primary);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 4rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      to right,
      var(--yoga-primary),
      var(--massage-primary),
      var(--midwifery-primary)
    );
    border-radius: 3px;
  }
`;

const ServiceButton = styled(Link)<{ bgColor: string; hoverColor: string; borderColor: string }>`
  display: block;
  width: 250px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background-color: ${props => props.bgColor};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  border-bottom: 5px solid ${props => props.borderColor};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.hoverColor};
  }
`;

const ColorPaletteSection = styled.div`
  margin-top: 5rem;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PaletteTitle = styled.h2`
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-size: 2rem;
`;

const ColorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PaletteColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ColorSwatch = styled.div<{ bgColor: string; textColor?: string }>`
  height: 80px;
  background-color: ${props => props.bgColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.textColor || 'white'};
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PaletteName = styled.h3`
  margin: 1rem 0;
  font-size: 1.2rem;
  color: var(--text-secondary);
`;

const AccentBar = styled.div`
  height: 5px;
  background: linear-gradient(
    to right,
    var(--yoga-deep),
    var(--massage-deep),
    var(--midwifery-deep),
    var(--text-tertiary)
  );
  margin: 4rem 0 2rem;
  border-radius: 3px;
`;

const Home = () => {
  return (
    <Container>
      <Header>
        <Title>Welcome to Melanie's Wellness</Title>
        <Subtitle>
          Discover balance, healing, and tranquility through our specialized wellness services.
          Each treatment is tailored to your unique needs and goals.
        </Subtitle>
      </Header>

      <ServicesContainer>
        <ServiceButton
          to="/massage"
          bgColor="var(--massage-primary)"
          hoverColor="var(--massage-deep)"
          borderColor="var(--massage-deep)"
        >
          Massage
        </ServiceButton>
        <ServiceButton
          to="/yoga"
          bgColor="var(--yoga-primary)"
          hoverColor="var(--yoga-deep)"
          borderColor="var(--yoga-deep)"
        >
          Yoga
        </ServiceButton>
        <ServiceButton
          to="/midwifery"
          bgColor="var(--midwifery-primary)"
          hoverColor="var(--midwifery-deep)"
          borderColor="var(--midwifery-deep)"
        >
          Midwifery
        </ServiceButton>
      </ServicesContainer>

      <AccentBar />

      <ColorPaletteSection>
        <PaletteTitle>Our Color Palettes</PaletteTitle>
        <ColorsGrid>
          <PaletteColumn>
            <PaletteName>Yoga</PaletteName>
            <ColorSwatch bgColor="var(--yoga-primary)">Primary</ColorSwatch>
            <ColorSwatch bgColor="var(--yoga-light)">Light</ColorSwatch>
            <ColorSwatch bgColor="var(--yoga-deep)">Deep</ColorSwatch>
          </PaletteColumn>

          <PaletteColumn>
            <PaletteName>Massage</PaletteName>
            <ColorSwatch bgColor="var(--massage-primary)">Primary</ColorSwatch>
            <ColorSwatch bgColor="var(--massage-light)">Light</ColorSwatch>
            <ColorSwatch bgColor="var(--massage-deep)">Deep</ColorSwatch>
          </PaletteColumn>

          <PaletteColumn>
            <PaletteName>Midwifery</PaletteName>
            <ColorSwatch bgColor="var(--midwifery-primary)">Primary</ColorSwatch>
            <ColorSwatch bgColor="var(--midwifery-light)">Light</ColorSwatch>
            <ColorSwatch bgColor="var(--midwifery-deep)">Deep</ColorSwatch>
          </PaletteColumn>

          <PaletteColumn>
            <PaletteName>Beige/Neutral</PaletteName>
            <ColorSwatch bgColor="var(--beige-primary)" textColor="#333">Primary</ColorSwatch>
            <ColorSwatch bgColor="var(--beige-light)" textColor="#333">Light</ColorSwatch>
            <ColorSwatch bgColor="var(--beige-deep)">Deep</ColorSwatch>
          </PaletteColumn>

          <PaletteColumn>
            <PaletteName>Black</PaletteName>
            <ColorSwatch bgColor="var(--text-primary)">Primary</ColorSwatch>
            <ColorSwatch bgColor="var(--text-secondary)">Charcoal</ColorSwatch>
            <ColorSwatch bgColor="var(--text-tertiary)">Deep Noir</ColorSwatch>
          </PaletteColumn>
        </ColorsGrid>
      </ColorPaletteSection>
    </Container>
  );
};

export default Home;
