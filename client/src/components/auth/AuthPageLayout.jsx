import Topbar from '../Topbar';
import HorizontalMenu from '../HorizontalMenu';
import Footer from '../Footer';

const AuthPageLayout = ({ children }) => (
  <div className="app-container">
    <div className="aurora-bg" />
    <main className="main-content flex min-h-screen flex-col">
      <Topbar isHorizontalMenu>
        <HorizontalMenu />
      </Topbar>
      <div className="flex w-full flex-1 items-center justify-center px-6 py-12 text-[var(--text-primary)]">
        {children}
      </div>
      <Footer />
    </main>
  </div>
);

export default AuthPageLayout;
