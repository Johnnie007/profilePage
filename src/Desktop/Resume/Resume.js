import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../../resume/johnnieResume.pdf';
import './Resume.scss'

const Resume = () => {
    
    return(
        <div className='container'>
            <h1 className='container__h1'>Resume</h1>
            <Document className='document' file={resume}>
                <Page pageNumber={1}/>
            </Document>
             <li className='desktop-nav-li'><a href={resume} download='JohnnieResume'><h1>Download</h1></a></li>
        </div>
    )
}

export default Resume