import { FC, ReactNode } from 'react';
import { StyleProp, TextStyle, GestureResponderEvent, Text, StyleSheet } from 'react-native';

export const CustomText: FC<{
  children: ReactNode,
  style?: StyleProp<TextStyle>,
  color?: string,
  numberOfLines?: number,
  wrap?: boolean,
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean,
}> = ({ children, style, color, numberOfLines, onPress, disabled }) => {

    return (<>
        <Text allowFontScaling={false} disabled={disabled} numberOfLines={numberOfLines} onPress={onPress} style={[s.text, style, {color: color }]}>{children}</Text>
    </>);
};

const s = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    lineHeight: 21,
  },
});
