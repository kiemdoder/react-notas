import "./AppLayout.scss";

export const AppLayout = ({
  children,
  sideNavWeight = 1,
  contentWeight = 3,
}: {
  children: any[];
  sideNavWeight?: number;
  contentWeight?: number;
}) => {
  const [header, sideNav, content] = children;
  return (
    <div
      className="app-layout"
      style={{ gridTemplateColumns: `${sideNavWeight}fr ${contentWeight}fr` }}
    >
      <div className="app-layout-header">{header}</div>
      <div className="app-layout-side-nav">{sideNav}</div>
      <div className="app-layout-content">{content}</div>
    </div>
  );
};
