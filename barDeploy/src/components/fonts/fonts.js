import { createGlobalStyle } from 'styled-components';
import almendra from './almendra-v12-latin-regular.woff';
import almendra2 from './almendra-v12-latin-regular.woff2';
import arbutus from './arbutus-v9-latin-regular.woff';
import arbutus2 from './arbutus-v9-latin-regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'almendra';
        src: local('Font Name'), local('FontName'),
        url(${almendra2}) format('woff2'),
        url(${almendra}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'arbutus';
        src: local('Font Name'), local('FontName'),
        url(${arbutus2}) format('woff2'),
        url(${arbutus}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;