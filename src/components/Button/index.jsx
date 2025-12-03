import { StyledButton } from "./styled";

export function Button({ handleClick, children }) {
    return <StyledButton onClick={handleClick}>{children}</StyledButton>
};