import { useState, FC, ReactElement } from 'react';
import { ContainerModulos, Title, SubmoduloContainer, Submodulo } from "./style"
import Link from 'next/link';

interface ModulosProps {
    nomeModulo: string;
    submodulos: string[];
    Icone?: any
    theme: any; // adicione o tema aqui

}

const Modulos: FC<ModulosProps> = ({ nomeModulo, submodulos, Icone = null, theme }) => {
    const [showSubModulos, setShowSubModulos] = useState(false);
    console.log(theme)
    const handleClick = () => {
        setShowSubModulos(!showSubModulos);
    }

    return (
        <ContainerModulos onClick={handleClick}>
            {Icone && <Icone size={40} weight="regular" color={theme.primary} />}
            <Title>{nomeModulo}</Title>
            {showSubModulos &&
                <SubmoduloContainer>
                    {submodulos.map((submodulo, index) => (
                        <Submodulo key={index} href={'/home/'+submodulo}> {submodulo} </Submodulo>
                    ))}
                </SubmoduloContainer>
            }
        </ContainerModulos>
    )
}

export default Modulos;

