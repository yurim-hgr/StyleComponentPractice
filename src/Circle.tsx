import { styled } from "styled-components"

interface CircleProps {
    bgcolor: string;
    border?: string;
}

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${props=> props.bgcolor};
    border-radius: 100px;
    border : 1px solid ${props=> props.border};
`;

function Circle ({bgcolor , border}:CircleProps) {
    return <Container bgcolor={bgcolor} border={border ?? bgcolor}/>
}

export default Circle;