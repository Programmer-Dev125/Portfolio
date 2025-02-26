import SidebarContent from "./card/sidebar-content";

export default function Sidebar({ active, onRoute }) {
  return (
    <div className="sidebar mt30 mb30">
      <div className="content mt30 mb30">
        <SidebarContent active={active} onRoute={onRoute} />
      </div>
    </div>
  );
}
