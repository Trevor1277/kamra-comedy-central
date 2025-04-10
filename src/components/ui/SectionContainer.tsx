
import { ReactNode } from 'react';
import AnimatedSection from '../AnimatedSection';

interface SectionContainerProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  titleAnimation?: 'fade-in' | 'slide-up' | 'scale-in';
  contentAnimation?: 'fade-in' | 'slide-up' | 'scale-in';
  contentDelay?: number;
  full?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'prose' | 'none';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const SectionContainer = ({
  children,
  title,
  subtitle,
  className = '',
  containerClassName = '',
  titleAnimation = 'slide-up',
  contentAnimation = 'fade-in',
  contentDelay = 300,
  full = false,
  maxWidth = '4xl',
  spacing = 'lg',
}: SectionContainerProps) => {
  
  // Map spacing values to tailwind classes
  const spacingMap = {
    none: 'py-0',
    xs: 'py-4 md:py-8',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  // Map max-width values to tailwind classes
  const maxWidthMap = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
    prose: 'max-w-prose',
    none: '',
  };

  return (
    <section className={`${spacingMap[spacing]} ${className}`}>
      <div className={`${!full ? 'container mx-auto px-4' : ''} ${containerClassName}`}>
        {(title || subtitle) && (
          <AnimatedSection animation={titleAnimation} className="text-center mb-12">
            {title && (
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg md:text-xl mx-auto opacity-80 ${maxWidthMap[maxWidth === 'full' || maxWidth === 'none' ? '3xl' : maxWidth]}`}>
                {subtitle}
              </p>
            )}
          </AnimatedSection>
        )}
        
        <AnimatedSection 
          animation={contentAnimation} 
          delay={contentDelay}
          className={`${maxWidth !== 'none' ? `${maxWidthMap[maxWidth]} mx-auto` : ''}`}
        >
          {children}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SectionContainer;
