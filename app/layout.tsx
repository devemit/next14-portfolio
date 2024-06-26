import './globals.css';
import { Metadata } from 'next';
import Navbar from '@/components/navbar';
import localFont from 'next/font/local';

const graphik = localFont({
    src: '../public/fonts/GraphikRegular.otf',
    weight: '400',
    variable: '--font-graphik',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Mitko',
    description: 'Portfolio Application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={graphik.className}>
            <body className='bg-[#111010] px-4 py-12 flex flex-col md:flex-row max-w-4xl mx-4 md:mt-20 lg:mt-32 lg:mx-auto gap-12'>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
