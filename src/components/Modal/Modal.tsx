import { 
  Root, 
  Trigger, 
  Portal as PrimitivesPortal,
  DialogClose,
  Description,
} from '@radix-ui/react-dialog';
import { HTMLAttributes } from 'react';
import { StyledCloseButton, StyledContent, StyledFooter, StyledOverlay, StyledTitle } from './Modal.styles';
import { HiOutlineX } from 'react-icons/hi';

const Content = ({children, ...props}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <PrimitivesPortal>
      <StyledOverlay data-testid='overlay' />
      <StyledContent {...props}>
        <DialogClose asChild>
          <StyledCloseButton>
            <HiOutlineX/>
          </StyledCloseButton>
        </DialogClose>
        {children}
      </StyledContent>
    </PrimitivesPortal>
  )
}

type TitleProps = HTMLAttributes<HTMLHeadingElement>
const Title = (props: TitleProps) => <StyledTitle>{props.children}</StyledTitle>

type FooterProps = HTMLAttributes<HTMLDivElement>
const Footer = (props: FooterProps) => {
  return (
    <StyledFooter {...props} />
  )
}

export {
  Root,
  Trigger,
  Content,
  Title,
  Description,
  Footer,
}