import MainLayout from "@/components/global/main-layout";
import Providers from "@/providers/providers"

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <Providers>
            <MainLayout>{children}</MainLayout>
        </Providers>
    )
}

export default Layout