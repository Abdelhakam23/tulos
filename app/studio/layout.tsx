import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Tulos Backend",
  description: "Tulos Backend Using Sanity",
};
const StudioLayout = ({children}:{children:React.ReactNode}) => {

    
  return (
    <html lang='en'>
        <body>
            {children}
        </body>
    </html>
    
  )
}

export default StudioLayout