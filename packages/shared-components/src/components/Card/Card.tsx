import React from 'react';
import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';

const getPaddingStyles = (padding: CardProps['padding'] = 'medium') => {
  switch (padding) {
    case 'small':
      return css`
        padding: 1rem;
      `;
    case 'large':
      return css`
        padding: 2rem;
      `;
    default:
      return css`
        padding: 1.5rem;
      `;
  }
};

const CardContainer = styled.div<{
  $padding?: CardProps['padding'];
}>`
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  ${props => getPaddingStyles(props.$padding)}

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
`;

const Header = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
`;

const Content = styled.div`
  color: var(--color-text);
`;

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  padding = 'medium',
  className = '',
  ...props
}) => {
  return (
    <CardContainer $padding={padding} className={className} {...props}>
      {(title || subtitle) && (
        <Header>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Header>
      )}
      <Content>{children}</Content>
    </CardContainer>
  );
};

export default Card;
