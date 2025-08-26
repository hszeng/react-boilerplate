import React from 'react';
import styled from 'styled-components';
import { FormProps } from './Form.types';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  margin: 0 0 0.25rem 0;
  font-size: 1.25rem;
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
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Form: React.FC<FormProps> = ({
  title,
  subtitle,
  onSubmit,
  children,
  className = '',
  ...props
}) => {
  return (
    <FormContainer onSubmit={onSubmit} className={className} {...props}>
      {(title || subtitle) && (
        <Header>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Header>
      )}
      <Content>{children}</Content>
    </FormContainer>
  );
};

export default Form;
