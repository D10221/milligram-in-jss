/*!
 * Milligram v1.3.0
 * https://milligram.github.io
 *
 * Copyright (c) 2018 CJ Patoilo
 * Licensed under the MIT license
 */
export default {
  '@global': {
    '*, *:after, *:before': {
      boxSizing: 'inherit'
    },
    html: {
      boxSizing: 'border-box',
      fontSize: '62.5%'
    },
    body: {
      color: '#606c76',
      fontFamily: '\'Roboto\', \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif',
      fontSize: '1.6em',
      fontWeight: '300',
      letterSpacing: '.01em',
      lineHeight: '1.6'
    },
    blockquote: {
      borderLeft: '0.3rem solid #d1d1d1',
      marginLeft: '0',
      marginRight: '0',
      padding: '1rem 1.5rem'
    },
    'blockquote *:last-child': {
      marginBottom: '0'
    },
    '.button, button, input[type=\'button\'], input[type=\'reset\'], input[type=\'submit\']': {
      backgroundColor: '#9b4dca',
      border: '0.1rem solid #9b4dca',
      borderRadius: '.4rem',
      color: '#fff',
      cursor: 'pointer',
      display: 'inline-block',
      fontSize: '1.1rem',
      fontWeight: '700',
      height: '3.8rem',
      letterSpacing: '.1rem',
      lineHeight: '3.8rem',
      padding: '0 3.0rem',
      textAlign: 'center',
      textDecoration: 'none',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    },
    '.button:focus, .button:hover, button:focus, button:hover, input[type=\'button\']:focus, input[type=\'button\']:hover, input[type=\'reset\']:focus, input[type=\'reset\']:hover, input[type=\'submit\']:focus, input[type=\'submit\']:hover': {
      backgroundColor: '#606c76',
      borderColor: '#606c76',
      color: '#fff',
      outline: '0'
    },
    '.button[disabled], button[disabled], input[type=\'button\'][disabled], input[type=\'reset\'][disabled], input[type=\'submit\'][disabled]': {
      cursor: 'default',
      opacity: '.5'
    },
    '.button[disabled]:focus, .button[disabled]:hover, button[disabled]:focus, button[disabled]:hover, input[type=\'button\'][disabled]:focus, input[type=\'button\'][disabled]:hover, input[type=\'reset\'][disabled]:focus, input[type=\'reset\'][disabled]:hover, input[type=\'submit\'][disabled]:focus, input[type=\'submit\'][disabled]:hover': {
      backgroundColor: '#9b4dca',
      borderColor: '#9b4dca'
    },
    '.button.button-outline, button.button-outline, input[type=\'button\'].button-outline, input[type=\'reset\'].button-outline, input[type=\'submit\'].button-outline': {
      backgroundColor: 'transparent',
      color: '#9b4dca'
    },
    '.button.button-outline:focus, .button.button-outline:hover, button.button-outline:focus, button.button-outline:hover, input[type=\'button\'].button-outline:focus, input[type=\'button\'].button-outline:hover, input[type=\'reset\'].button-outline:focus, input[type=\'reset\'].button-outline:hover, input[type=\'submit\'].button-outline:focus, input[type=\'submit\'].button-outline:hover': {
      backgroundColor: 'transparent',
      borderColor: '#606c76',
      color: '#606c76'
    },
    '.button.button-outline[disabled]:focus, .button.button-outline[disabled]:hover, button.button-outline[disabled]:focus, button.button-outline[disabled]:hover, input[type=\'button\'].button-outline[disabled]:focus, input[type=\'button\'].button-outline[disabled]:hover, input[type=\'reset\'].button-outline[disabled]:focus, input[type=\'reset\'].button-outline[disabled]:hover, input[type=\'submit\'].button-outline[disabled]:focus, input[type=\'submit\'].button-outline[disabled]:hover': {
      borderColor: 'inherit',
      color: '#9b4dca'
    },
    '.button.button-clear, button.button-clear, input[type=\'button\'].button-clear, input[type=\'reset\'].button-clear, input[type=\'submit\'].button-clear': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: '#9b4dca'
    },
    '.button.button-clear:focus, .button.button-clear:hover, button.button-clear:focus, button.button-clear:hover, input[type=\'button\'].button-clear:focus, input[type=\'button\'].button-clear:hover, input[type=\'reset\'].button-clear:focus, input[type=\'reset\'].button-clear:hover, input[type=\'submit\'].button-clear:focus, input[type=\'submit\'].button-clear:hover': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: '#606c76'
    },
    '.button.button-clear[disabled]:focus, .button.button-clear[disabled]:hover, button.button-clear[disabled]:focus, button.button-clear[disabled]:hover, input[type=\'button\'].button-clear[disabled]:focus, input[type=\'button\'].button-clear[disabled]:hover, input[type=\'reset\'].button-clear[disabled]:focus, input[type=\'reset\'].button-clear[disabled]:hover, input[type=\'submit\'].button-clear[disabled]:focus, input[type=\'submit\'].button-clear[disabled]:hover': {
      color: '#9b4dca'
    },
    code: {
      background: '#f4f5f6',
      borderRadius: '.4rem',
      fontSize: '86%',
      margin: '0 .2rem',
      padding: '.2rem .5rem',
      whiteSpace: 'nowrap'
    },
    pre: {
      background: '#f4f5f6',
      borderLeft: '0.3rem solid #9b4dca',
      overflowY: 'hidden'
    },
    'pre > code': {
      borderRadius: '0',
      display: 'block',
      padding: '1rem 1.5rem',
      whiteSpace: 'pre'
    },
    hr: {
      border: '0',
      borderTop: '0.1rem solid #f4f5f6',
      margin: '3.0rem 0'
    },
    'input[type=\'email\'], input[type=\'number\'], input[type=\'password\'], input[type=\'search\'], input[type=\'tel\'], input[type=\'text\'], input[type=\'url\'], input[type=\'color\'], input[type=\'date\'], input[type=\'month\'], input[type=\'week\'], input[type=\'datetime\'], input[type=\'datetime-local\'], input:not([type]), textarea, select': {
      W: 'none',
      M: 'none',
      appearance: 'none',
      backgroundColor: 'transparent',
      border: '0.1rem solid #d1d1d1',
      borderRadius: '.4rem',
      boxShadow: 'none',
      boxSizing: 'inherit',
      height: '3.8rem',
      padding: '.6rem 1.0rem',
      width: '100%'
    },
    'input[type=\'email\']:focus, input[type=\'number\']:focus, input[type=\'password\']:focus, input[type=\'search\']:focus, input[type=\'tel\']:focus, input[type=\'text\']:focus, input[type=\'url\']:focus, input[type=\'color\']:focus, input[type=\'date\']:focus, input[type=\'month\']:focus, input[type=\'week\']:focus, input[type=\'datetime\']:focus, input[type=\'datetime-local\']:focus, input:not([type]):focus, textarea:focus, select:focus': {
      borderColor: '#9b4dca',
      outline: '0'
    },
    select: {
      background: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%23d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>\') center right no-repeat',
      paddingRight: '3.0rem'
    },
    'select:focus': {
      backgroundImage: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%239b4dca" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>\')'
    },
    textarea: {
      minHeight: '6.5rem'
    },
    'label, legend': {
      display: 'block',
      fontSize: '1.6rem',
      fontWeight: '700',
      marginBottom: '.5rem'
    },
    fieldset: {
      borderWidth: '0',
      padding: '0'
    },
    'input[type=\'checkbox\'], input[type=\'radio\']': {
      display: 'inline'
    },
    '.label-inline': {
      display: 'inline-block',
      fontWeight: 'normal',
      marginLeft: '.5rem'
    },
    '.container': {
      margin: '0 auto',
      maxWidth: '112.0rem',
      padding: '0 2.0rem',
      position: 'relative',
      width: '100%'
    },
    '.row': {
      display: 'flex',
      flexDirection: 'column',
      padding: '0',
      width: '100%'
    },
    '.row.row-no-padding': {
      padding: '0'
    },
    '.row.row-no-padding > .column': {
      padding: '0'
    },
    '.row.row-wrap': {
      flexWrap: 'wrap'
    },
    '.row.row-top': {
      alignItems: 'flex-start'
    },
    '.row.row-bottom': {
      alignItems: 'flex-end'
    },
    '.row.row-center': {
      alignItems: 'center'
    },
    '.row.row-stretch': {
      alignItems: 'stretch'
    },
    '.row.row-baseline': {
      alignItems: 'baseline'
    },
    '.row .column': {
      display: 'block',
      flex: '1 1 auto',
      marginLeft: '0',
      maxWidth: '100%',
      width: '100%'
    },
    '.row .column.column-offset-10': {
      marginLeft: '10%'
    },
    '.row .column.column-offset-20': {
      marginLeft: '20%'
    },
    '.row .column.column-offset-25': {
      marginLeft: '25%'
    },
    '.row .column.column-offset-33, .row .column.column-offset-34': {
      marginLeft: '33.3333%'
    },
    '.row .column.column-offset-50': {
      marginLeft: '50%'
    },
    '.row .column.column-offset-66, .row .column.column-offset-67': {
      marginLeft: '66.6666%'
    },
    '.row .column.column-offset-75': {
      marginLeft: '75%'
    },
    '.row .column.column-offset-80': {
      marginLeft: '80%'
    },
    '.row .column.column-offset-90': {
      marginLeft: '90%'
    },
    '.row .column.column-10': {
      flex: '0 0 10%',
      maxWidth: '10%'
    },
    '.row .column.column-20': {
      flex: '0 0 20%',
      maxWidth: '20%'
    },
    '.row .column.column-25': {
      flex: '0 0 25%',
      maxWidth: '25%'
    },
    '.row .column.column-33, .row .column.column-34': {
      flex: '0 0 33.3333%',
      maxWidth: '33.3333%'
    },
    '.row .column.column-40': {
      flex: '0 0 40%',
      maxWidth: '40%'
    },
    '.row .column.column-50': {
      flex: '0 0 50%',
      maxWidth: '50%'
    },
    '.row .column.column-60': {
      flex: '0 0 60%',
      maxWidth: '60%'
    },
    '.row .column.column-66, .row .column.column-67': {
      flex: '0 0 66.6666%',
      maxWidth: '66.6666%'
    },
    '.row .column.column-75': {
      flex: '0 0 75%',
      maxWidth: '75%'
    },
    '.row .column.column-80': {
      flex: '0 0 80%',
      maxWidth: '80%'
    },
    '.row .column.column-90': {
      flex: '0 0 90%',
      maxWidth: '90%'
    },
    '.row .column .column-top': {
      alignSelf: 'flex-start'
    },
    '.row .column .column-bottom': {
      alignSelf: 'flex-end'
    },
    '.row .column .column-center': {
      M: 'center',
      alignSelf: 'center'
    },
    '@media (min-width: 40rem)': {
      '.row': {
        flexDirection: 'row',
        marginLeft: '-1.0rem',
        width: 'calc(100% + 2.0rem)'
      },
      '.row .column': {
        marginBottom: 'inherit',
        padding: '0 1.0rem'
      }
    },
    a: {
      color: '#9b4dca',
      textDecoration: 'none'
    },
    'a:focus, a:hover': {
      color: '#606c76'
    },
    'dl, ol, ul': {
      listStyle: 'none',
      marginTop: '0',
      paddingLeft: '0'
    },
    'dl dl, dl ol, dl ul, ol dl, ol ol, ol ul, ul dl, ul ol, ul ul': {
      fontSize: '90%',
      margin: '1.5rem 0 1.5rem 3.0rem'
    },
    ol: {
      listStyle: 'decimal inside'
    },
    ul: {
      listStyle: 'circle inside'
    },
    '.button, button, dd, dt, li': {
      marginBottom: '1.0rem'
    },
    'fieldset, input, select, textarea': {
      marginBottom: '1.5rem'
    },
    'blockquote, dl, figure, form, ol, p, pre, table, ul': {
      marginBottom: '2.5rem'
    },
    table: {
      borderSpacing: '0',
      width: '100%'
    },
    'td, th': {
      borderBottom: '0.1rem solid #e1e1e1',
      padding: '1.2rem 1.5rem',
      textAlign: 'left'
    },
    'td:first-child, th:first-child': {
      paddingLeft: '0'
    },
    'td:last-child, th:last-child': {
      paddingRight: '0'
    },
    'b, strong': {
      fontWeight: 'bold'
    },
    p: {
      marginTop: '0'
    },
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: '300',
      letterSpacing: '-.1rem',
      marginBottom: '2.0rem',
      marginTop: '0'
    },
    h1: {
      fontSize: '4.6rem',
      lineHeight: '1.2'
    },
    h2: {
      fontSize: '3.6rem',
      lineHeight: '1.25'
    },
    h3: {
      fontSize: '2.8rem',
      lineHeight: '1.3'
    },
    h4: {
      fontSize: '2.2rem',
      letterSpacing: '-.08rem',
      lineHeight: '1.35'
    },
    h5: {
      fontSize: '1.8rem',
      letterSpacing: '-.05rem',
      lineHeight: '1.5'
    },
    h6: {
      fontSize: '1.6rem',
      letterSpacing: '0',
      lineHeight: '1.4'
    },
    img: {
      maxWidth: '100%'
    },
    '.clearfix:after': {
      clear: 'both',
      content: '\' \'',
      display: 'table'
    },
    '.float-left': {
      float: 'left'
    },
    '.float-right': {
      float: 'right'
    }
  }
};
