import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  background-color: var(--midwifery-primary);
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
  color: var(--midwifery-primary);
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, background-color 0.2s ease;
  border: 1px solid var(--text-secondary);

  &:hover {
    transform: translateY(-2px);
    background-color: var(--midwifery-light);
  }
`;

const Intro = styled.div`
  background-color: var(--midwifery-light);
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  color: var(--text-secondary);

  h2 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: var(--midwifery-light);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;

    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineHeading = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-primary);
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--midwifery-deep);
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const TimelineItem = styled.div<{ isLeft: boolean }>`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  left: ${props => props.isLeft ? '0' : '50%'};

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const TimelineContent = styled.div`
  padding: 1.5rem;
  background-color: var(--midwifery-light);
  position: relative;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: var(--text-secondary);

  h3 {
    color: var(--midwifery-deep);
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    background-color: var(--midwifery-light);
    top: 22px;
    border-radius: 50%;
    z-index: 1;
    border: 4px solid var(--midwifery-primary);
  }
`;

const TestimonialSection = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 3rem;
  text-align: center;
  color: var(--text-secondary);
  border: 1px solid var(--midwifery-deep);
`;

const Quote = styled.blockquote`
  font-style: italic;
  font-size: 1.2rem;
  color: var(--midwifery-deep);
  max-width: 800px;
  margin: 1.5rem auto;
  padding: 1.5rem;
  background-color: var(--midwifery-light);
  border-radius: 8px;
  position: relative;

  &::before, &::after {
    content: '"';
    font-size: 3rem;
    position: absolute;
    opacity: 0.2;
    font-family: Georgia, serif;
  }

  &::before {
    top: -10px;
    left: 10px;
  }

  &::after {
    bottom: -30px;
    right: 10px;
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
  color: var(--midwifery-deep);
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
  background-color: var(--midwifery-light);
  border-radius: 8px;
  font-style: italic;
  color: var(--text-secondary);
`;

const MidwiferyPage = () => {
  return (
    <Container>
      <Header>
        <Title>Midwifery Services</Title>
        <p>Compassionate and personalized care throughout your pregnancy journey</p>
        <BackButton to="/">Back to Home</BackButton>
      </Header>

      <Intro>
        <h2>Our Midwifery Philosophy</h2>
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
      </Intro>

      <TimelineHeading>Your Journey With Us</TimelineHeading>
      <Timeline>
        <TimelineItem isLeft={true}>
          <TimelineContent>
            <h3>Pre-Conception</h3>
            <p>
              Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              Donec eu libero sit amet quam egestas semper.
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem isLeft={false}>
          <TimelineContent>
            <h3>First Trimester</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames
              ac turpis egestas. Vestibulum tortor quam.
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem isLeft={true}>
          <TimelineContent>
            <h3>Second Trimester</h3>
            <p>
              Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
              Quisque sit amet est et sapien ullamcorper pharetra.
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem isLeft={false}>
          <TimelineContent>
            <h3>Third Trimester</h3>
            <p>
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
              Mauris placerat eleifend leo.
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem isLeft={true}>
          <TimelineContent>
            <h3>Birth</h3>
            <p>
              Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              Donec eu libero sit amet quam egestas semper.
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem isLeft={false}>
          <TimelineContent>
            <h3>Postpartum</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames
              ac turpis egestas. Vestibulum tortor quam.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <TestimonialSection>
        <h2>What Our Clients Say</h2>
        <Quote>
          "Melanie's midwifery care was the highlight of my pregnancy journey. Her knowledge,
          compassion, and dedication made me feel supported and empowered throughout the entire process."
        </Quote>
        <p><strong>— Jane D., New Mother</strong></p>
      </TestimonialSection>

      <ColorPaletteSection>
        <PaletteTitle>Golden Ochre Palette</PaletteTitle>
        <p>Our midwifery services are represented by warm golden ochre tones, symbolizing nurturing care and support.</p>

        <ColorsRow>
          <ColorSwatch bgColor="var(--midwifery-primary)">
            Primary
            <ColorValue>#CC7722</ColorValue>
          </ColorSwatch>

          <ColorSwatch bgColor="var(--midwifery-light)">
            Light
            <ColorValue>#E3A23D</ColorValue>
          </ColorSwatch>

          <ColorSwatch bgColor="var(--midwifery-deep)">
            Deep
            <ColorValue>#8B4513</ColorValue>
          </ColorSwatch>
        </ColorsRow>

        <NeutralPaletteNote>
          This page also incorporates neutral beige tones and black accents for a balanced design.
        </NeutralPaletteNote>
      </ColorPaletteSection>
    </Container>
  );
};

export default MidwiferyPage;
