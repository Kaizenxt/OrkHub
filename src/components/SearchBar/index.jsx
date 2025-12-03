import { InputWrapper, Input, IconArea } from "./styled";
import { MagnifyingGlass } from "@phosphor-icons/react";

export function SearchBar({ placeholder = "Buscar...", onChange }) {
    return (
        <InputWrapper>
            <IconArea>
                <MagnifyingGlass size={20} color="#9146ff" weight="bold" />
            </IconArea>

            <Input
                type="text"
                placeholder={placeholder}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </InputWrapper>
    );
}
