import { Dialog, DialogOverlay, DialogContent } from '@radix-ui/react-dialog';
import { Portal } from '@radix-ui/react-portal';
import { useState, useEffect, FC, ReactElement } from 'react';
import {
  CloseIconWrapper,
  ContainerModulos,
  ContainerModulosLink,
  ContainerModulosModal,
  ContainerPortal,
  ContentWrapper,
  IconX,
  Title,
  TitleModal,
} from './style';
import Link from 'next/link';
import { X } from '@phosphor-icons/react';
import { Router } from 'next/router';

interface ModulosProps {
  nomeModulo: string;
  submodulos?: string[];
  Icone?: any;
  theme: any;
  routers?: any;
}

const Modulos: FC<ModulosProps> = ({
  nomeModulo,
  submodulos,
  Icone = null,
  theme,
  routers,
}) => {
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {!open && submodulos && (
        <ContainerModulos onClick={handleOpen}>
          {Icone && <Icone size={40} weight="regular" color={theme.primary} />}
          <Title>{nomeModulo}</Title>
        </ContainerModulos>
      )}

      {!submodulos && (
        <ContainerModulosLink href={`${routers}`}>
          {Icone && <Icone size={40} weight="regular" color={theme.primary} />}
          <Title>{nomeModulo}</Title>
        </ContainerModulosLink>
      )}

      {isClient && submodulos && (
        <Portal>
          <Dialog open={open} onOpenChange={handleClose}>
            <DialogOverlay
              style={{
                position: 'fixed',
                backgroundColor: 'rgba(0, 0, 0, .5)',
                inset: 0,
              }}
            >
              <DialogContent
                style={{
                  height: '100vh',
                  width: '100vw',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ContainerPortal>
                  <CloseIconWrapper onClick={handleClose}>
                    <IconX size={32} />
                  </CloseIconWrapper>
                  <ContentWrapper>
                    <TitleModal>{nomeModulo}</TitleModal>
                    {submodulos.map((submodulo, index) => (
                      <ContainerModulosModal
                        key={index}
                        count={submodulos.length}
                      >
                        <Title>{submodulo}</Title>
                      </ContainerModulosModal>
                    ))}
                  </ContentWrapper>
                </ContainerPortal>
              </DialogContent>
            </DialogOverlay>
          </Dialog>
        </Portal>
      )}
    </>
  );
};

export default Modulos;
