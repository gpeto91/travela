import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`;

const Input = styled.input`
    border: 1px solid #FFFAFB;
    border-bottom: 3px solid #FFFAFB;
    border-radius: 4px;
    background-color: #4F6D7A;
    color: #FFFAFB;
    padding: 8px 15px;
    font-size: 20px;
    font-family: 'roboto_condensedregular';
    outline: none;
`;

const Label = styled.label`
    font-family: 'roboto_condensedregular';
    font-size: 15px;
    text-transform: uppercase;
    color: #EC9A29;
`;

const InputContainer = props => {
    const {
        type = "text",
        label = "",
        name = "",
        minDate = "",
        maxDate = "",
        placeholder = "",
        value = "",
        change = () => {},
        blur = () => {}
    } = props;

    return (
        <Wrapper>
            <Label>{ label }</Label>

            {type === "date" && (
                <Input
                    type={type}
                    min={minDate}
                    max={maxDate}
                    placeholder={placeholder}
                    value={value}
                    onChange={change}
                    onBlur={blur}
                    name={name}
                />
            )}

            {type !== "date" && (
                <Input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={change}
                    onBlur={blur}
                    name={name}
                />
            )}
        </Wrapper>
    )
}

export default InputContainer;
