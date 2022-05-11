/**
 * @copyright Copyright © 2022 Corretto, Inc. All rights reserved.
 */

// Neutral
export const neutral = {
  0: '#FFFFFF',
  10: '#FAFBFC',
  20: '#F4F5F7',
  30: '#EBECF0',
  40: '#DFE1E6',
  50: '#C1C7D0',
  60: '#B3BAC5',
  70: '#A5ADBA',
  80: '#97A0AF',
  90: '#8993A4',
  100: '#7A869A',
  200: '#6B778C',
  300: '#5E6C84',
  400: '#505F79',
  500: '#42526E',
  600: '#344563',
  700: '#253858',
  800: '#172B4D',
  900: '#091E42',
};

// Blue
export const blue = {
  20: '#E6EFFC',
  50: '#DEEBFF',
  75: '#B3D4FF',
  100: '#4C9AFF',
  200: '#2684FF',
  300: '#0065FF',
  400: '#0052CC',
  500: '#0747A6',
};

// Red
export const red = {
  50: '#FFEBE6',
  75: '#FFBDAD',
  100: '#FF8F73',
  200: '#FF7452',
  300: '#FF5630',
  400: '#DE350B',
  500: '#BF2600',
};

// Yellow
export const yellow = {
  50: '#FFFAE6',
  75: '#FFF0B3',
  100: '#FFE380',
  200: '#FFC400',
  300: '#FFAB00',
  400: '#FF991F',
  500: '#FF8B00',
};

// Green
export const green = {
  50: '#E3FCEF',
  75: '#ABF5D1',
  100: '#79F2C0',
  200: '#57D9A3',
  300: '#36B37E',
  400: '#00875A',
  500: '#006644',
};

export const teal = {
  50: '#E6FCFF',
  75: '#B3F5FF',
  100: '#79E2F2',
  200: '#00C7E6',
  300: '#00B8D9',
  400: '#00A3BF',
  500: '#008DA6',
};

export const purple = {
  50: '#EAE6FF',
  75: '#C0B6F2',
  100: '#998DD9',
  200: '#8777D9',
  300: '#6554C0',
  400: '#5243AA',
  500: '#403294',
};

export const semantic = {
  action: {
    primary: blue[400],
    secondary: neutral[40],
    confirm: green[400],
    warning: yellow[400],
    remove: red[400],
    help: purple[400],
  },
  message: {
    information: blue[400],
    success: green[400],
    warning: yellow[400],
    error: red[400],
  },
  connectivity: {
    unavailable: neutral[40],
    available: green[400],
    busy: red[400],
    focus: purple[400],
  },
  status: {
    in_progress: blue[400],
    default_or_todo: neutral[40],
    added_or_completed: green[400],
    moved: yellow[400],
    removed_or_failed: red[400],
    new: purple[400],
  },
  priority: {
    minor: blue[400],
    trivial: neutral[40],
    medium_to_blocker: yellow[400],
    major_to_critical: red[400],
  },
  team: {
    me: blue[400],
    others: neutral[40],
  },
  disabledBg4: 'rgba(9, 30, 66, 0.04)',
  buttonBg8: 'rgba(9, 30, 66, 0.08)',
};

const colors = {
  blue,
  neutral,
  red,
  yellow,
  green,
  teal,
  purple,
  semantic,
};

export default colors;
