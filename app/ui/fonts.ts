import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lusitana',
    weight: '400'
});