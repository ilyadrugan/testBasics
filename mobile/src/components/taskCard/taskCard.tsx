import React, { FC, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Animated } from 'react-native';
import { CardContainer } from '../card/cardContainer';
import { TaskModel } from '../../store/state/taskStore/models/models';
import { CustomText } from '../text/customText';
import FireIcon from '../../assets/icons/fire.svg'
import gs from '../../styles/global';
import colors from '../colors/colors';

interface Props {
  task: TaskModel;
  onToggleComplete: (id: string, val: boolean) => void;
  onEdit: (task: TaskModel) => void;
  onDelete: (id: string) => void;
}

const TaskCard: FC<Props> = ({ task, onToggleComplete, onEdit, onDelete }) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const handleDelete = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: -500,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onDelete(task._id);
    });
  };
  return (
    <Animated.View
      style={{
        transform: [{ translateX }],
        opacity,
        marginBottom: 10,
      }}
    >
    <CardContainer>
      <View style={styles.header}>
          <View style={[gs.flexRow, {flex: 0.8}]}>
          {task.isImportant && <FireIcon />}
          <CustomText style={[gs.fontCaption, gs.bold]}>
          {task.title}
          </CustomText>
          
        </View>
          <Switch
            value={task.isCompleted}
            onValueChange={(val: boolean) => onToggleComplete(task._id, val)}
          />
      </View>
      {task.description ? (
        <CustomText style={gs.fontCaption2}>{task.description}</CustomText>
      ) : null}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onEdit(task)}>
          <CustomText color={colors.OCEAN_COLOR} style={gs.fontCaption2}>Редактировать</CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <CustomText color={colors.RED_COLOR} style={gs.fontCaption2}>Удалить</CustomText>
        </TouchableOpacity>
      </View>
    </CardContainer>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  important: {
    color: 'red',
  },
  description: {
    fontSize: 14,
    marginTop: 4,
    color: '#444',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default TaskCard;