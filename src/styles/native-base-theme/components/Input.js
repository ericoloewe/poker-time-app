import { Platform } from 'react-native';

import variable from './../variables/platform';

export default (variables = variable) => {
  const inputTheme = {
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    fontSize: variables.inputFontSize,
    lineHeight: variables.inputLineHeight,
    backgroundColor: "rgba(0, 0, 0, .5)",
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 10
  };


  return inputTheme;
};
