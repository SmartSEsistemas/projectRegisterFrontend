import Layout from '@/components/Layout';
import { Container, TitlePage } from '@/styles/global';
import moduloCadastro from '@/components/Sidebar/dataSideBar/moduloCadastro';

const ModuloCadastro = () => {
  return (
    <Layout dataSideBar={moduloCadastro}>
      <Container>
        <TitlePage>Módulo cadastro</TitlePage>
      </Container>
    </Layout>
  );
};

export default ModuloCadastro;
