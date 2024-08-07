import { StyledHeader } from './Header.styles';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
    </StyledHeader>
  );
};
