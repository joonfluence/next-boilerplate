import { css } from 'styled-components';

const placeholder = (color) => {
  return css`
    ::-webkit-input-placeholder {
      color: ${color};
    }
    :-moz-placeholder {
      color: ${color};
      opacity: 1;
    }
    ::-moz-placeholder {
      color: ${color};
      opacity: 1;
    }
    :-ms-input-placeholder {
      color: ${color};
    }
    ::-ms-input-placeholder {
      color: ${color};
    }
    ::placeholder {
      color: ${color};
    }
  `;
};

export default placeholder;
