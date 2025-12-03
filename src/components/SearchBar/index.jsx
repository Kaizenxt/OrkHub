import { InputWrapper, Input, IconArea } from "./styled";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export function SearchBar({ placeholder = "Buscar..." }) {
    return (
        <InputWrapper>
            <IconArea>
                <MagnifyingGlassIcon size={20} color="#9146ff" weight="bold" />
            </IconArea>

            <Input
                type="text"
                placeholder={placeholder}
            />
        </InputWrapper>
    );
}
