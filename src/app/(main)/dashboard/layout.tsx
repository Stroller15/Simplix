import { FC } from 'react'

interface LayoutProps {
    children: React.ReactNode;
    params: any;
}

const Layout: FC<LayoutProps> = ({children, params}) => {
  return <main className='flex over-hidden h-screen'>
    {children}
  </main>
}

export default Layout