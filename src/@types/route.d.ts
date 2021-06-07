interface Route {
  name: string;
  path: string;
  isExact?: boolean;
  component: (props: any) => JSX.Element;
  routes?: Route[];
}
