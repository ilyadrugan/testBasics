import React from 'react';
import { FC, ReactNode } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewProps, ViewStyle } from 'react-native';
import colors from '../colors/colors';


export interface CardContainerProps extends ViewProps {
  children?: ReactNode,
  style?: StyleProp<ViewStyle>,
  onPress?: () => void | null,
  disabled?: boolean
  activeOpacity?: number
}

export const CardContainer: FC<CardContainerProps> = ({children, style, onPress, disabled, activeOpacity, ...props}) => {
    return <View {...props}>
    <TouchableOpacity
      style={[
        s.container,
        style,
      ]}
      activeOpacity={activeOpacity || 0}
      onPress={onPress}
      disabled={disabled ? true : onPress ? false : true }
    >
      {children}
    </TouchableOpacity>
    </View>;
};

const s = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.WHITE_COLOR,
      padding: 16,
      gap: 12,
      borderRadius: 26,
    },
  });
