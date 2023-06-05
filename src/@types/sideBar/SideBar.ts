export interface SidebarProps {
  data: {
    nomeModulo: string;
    icone: any;
    submodulos: {
      name: string;
      link: string;
    }[];
  }[];
}
