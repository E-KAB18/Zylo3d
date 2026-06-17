import Header from '@/components/layout/Header';
import ZyloFooter from '@/components/layout/ZyloFooter';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header theme="header-light" />
            {children}
            <ZyloFooter />
        </>
    );
}
