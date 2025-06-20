import { FC } from 'react';
import { Pressable, Text, StyleSheet, TextProps, StyleProp, ViewStyle } from 'react-native';
import colors from '../colors/colors';

export const CustomButton: FC<{
    title: string,
    onPress: ()=>void,
    textStyle?: TextProps,
    style?: StyleProp<ViewStyle>
}> = ({ title, onPress, style, textStyle }) => (
  <Pressable onPress={onPress} style={[styles.button, style]}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.OCEAN_COLOR,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#fff',
  },
});
