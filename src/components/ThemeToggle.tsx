import styled from '@emotion/styled';
import { useTheme } from '../contexts/ThemeContext';

const ToggleContainer = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ToggleButton = styled.button<{ isAlternative: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 42px;
  border-radius: 21px;
  padding: 0 16px;
  cursor: pointer;
  background: ${props => props.isAlternative
    ? 'linear-gradient(to right, #8FBC8F 0%, #FF7F50 50%, #B57EDC 100%)'
    : 'linear-gradient(to right, #6B7355 0%, #A0522D 50%, #CC7722 100%)'
  };
  color: white;
  font-weight: bold;
  border: 2px solid white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const ThemeLabel = styled.span`
  font-size: 14px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;

const ColorPalettes = styled.div`
  display: flex;
  gap: 5px;
`;

const ServicePalette = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const ColorSwatch = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isAlternative = theme === 'alternative';

  // Define the color palettes from the design rules document
  const defaultColors = {
    yoga: ['#6B7355', '#9CA383', '#3C4228'],      // Sage Green
    massage: ['#A0522D', '#C08267', '#5D3A1A'],   // Terracotta
    midwifery: ['#CC7722', '#E3A23D', '#8B4513'], // Golden Ochre
  };

  const alternativeColors = {
    yoga: ['#8FBC8F', '#C5E1A5', '#567E5A'],      // Alternative Sage
    massage: ['#FF7F50', '#FFB088', '#CD5C5C'],   // Warm Coral
    midwifery: ['#B57EDC', '#E6E6FA', '#8A4FFF'], // Soft Lavender
  };

  const colors = isAlternative ? alternativeColors : defaultColors;

  return (
    <ToggleContainer>
      <ToggleButton
        onClick={toggleTheme}
        isAlternative={isAlternative}
        title={isAlternative ? "Switch to default colors" : "Switch to alternative colors"}
      >
        <ThemeLabel>
          {isAlternative ? 'Alternative Theme' : 'Default Theme'}
        </ThemeLabel>
        <ColorPalettes>
          {/* Yoga Colors */}
          <ServicePalette title="Yoga Colors">
            <ColorSwatch color={colors.yoga[0]} />
            <ColorSwatch color={colors.yoga[1]} />
            <ColorSwatch color={colors.yoga[2]} />
          </ServicePalette>

          {/* Massage Colors */}
          <ServicePalette title="Massage Colors">
            <ColorSwatch color={colors.massage[0]} />
            <ColorSwatch color={colors.massage[1]} />
            <ColorSwatch color={colors.massage[2]} />
          </ServicePalette>

          {/* Midwifery Colors */}
          <ServicePalette title="Midwifery Colors">
            <ColorSwatch color={colors.midwifery[0]} />
            <ColorSwatch color={colors.midwifery[1]} />
            <ColorSwatch color={colors.midwifery[2]} />
          </ServicePalette>
        </ColorPalettes>
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;
