import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import { CustomText } from '../text/customText';
import taskStore from '../../store/state/taskStore/taskStore';
import colors from '../colors/colors';

const FilterBar = observer(() => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          taskStore.filter === 'all' && styles.activeButton,
        ]}
        onPress={() => taskStore.setFilter('all')}
      >
        <CustomText color={colors.WHITE_COLOR}>Все</CustomText>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          taskStore.filter === 'important' && styles.activeButton,
        ]}
        onPress={() => taskStore.setFilter('important')}
      >
        <CustomText color={colors.WHITE_COLOR}>Важные</CustomText>
      </TouchableOpacity>
    </View>
  );
});

export default FilterBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 6,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  activeButton: {
    backgroundColor: '#2ecc71',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});
