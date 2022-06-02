import { createGlobalStyle } from 'styled-components'

import BoldFont from './Montserrat-Bold.ttf'
import RegularFont from './Montserrat-Regular.ttf'

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'bold';
        src: url(${BoldFont});
    }

    @font-face {
        font-family: 'regular';
        src: url(${RegularFont});
    }
`

export default FontStyles
