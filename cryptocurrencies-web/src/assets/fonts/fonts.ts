import { createGlobalStyle } from 'styled-components'

import BoldFont from './Montserrat-Bold.ttf'
import RegularFont from './Montserrat-Regular.ttf'

const FontStyles = createGlobalStyle`
  @font-face {
    src: url(${BoldFont});
    font-family: 'bold';
  }

  @font-face {
    src: url(${RegularFont});
    font-family: 'regular';
  }
`

export default FontStyles
