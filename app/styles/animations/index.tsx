'use client';

import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

interface AnimationWrapperProps {
   $duration: number;
   $delay: number;
 }

const StyledEntranceAnimation = keyframes`
  from {
    transform: translateY(-5px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AnimationWrapper = styled.div<AnimationWrapperProps>`
  animation-name: ${StyledEntranceAnimation};
  animation-fill-mode: forwards;
  animation-duration: ${({ $duration }) => $duration}s;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const EntranceAnimation = ({
  children,
  delay = 0,
  duration = 0.3,
}: {
   children: ReactNode;
   delay?: number | undefined;
   duration?: number | undefined;
}) => {
  return (
    <AnimationWrapper $duration={duration} $delay={delay}>
      {children}
    </AnimationWrapper>
  );
};

export default EntranceAnimation;
