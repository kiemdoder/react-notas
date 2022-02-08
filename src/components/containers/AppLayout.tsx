export const AppLayout = ({
  header: Header,
  sideNav: SideNav,
  content: Content,
}: {
  header: any; //TODO: component type?
  sideNav: any;
  content: any;
}) => {
  return (
    <div className="app-layout">
      <div className="app-layout-header">
        <Header />
      </div>
      <div className="app-layout-side-nav">
        <SideNav />
      </div>
      <div className="app-layout-content">
        <Content />
      </div>
    </div>
  );
};
