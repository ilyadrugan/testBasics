import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { TaskModel } from '../../store/state/taskStore/models/models';
import FireIcon from '../../assets/icons/fire.svg'
import { CustomText } from '../text/customText';

interface Props {
  visible: boolean;
  task: TaskModel;
  onClose: () => void;
  onSave: (updatedTask: TaskModel) => void;
}

const EditTaskModal: React.FC<Props> = ({ visible, task, onClose, onSave }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [isImportant, setIsImportant] = useState(task.isImportant);
  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setIsImportant(task.isImportant);
  }, [task]);

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <CustomText style={styles.label}>Название</CustomText>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Введите название"
          />

          <CustomText style={styles.label}>Описание</CustomText>
          <TextInput
            style={[styles.input, { height: 80 }]}
            value={description}
            onChangeText={setDescription}
            placeholder="Введите описание"
            multiline
          />
          <View style={styles.switchRow}>
            <CustomText style={styles.label}>Важная задача<FireIcon /></CustomText>
            <Switch value={isImportant} onValueChange={setIsImportant} />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancel} onPress={onClose}>
              <CustomText>Отмена</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.save}
              onPress={() => onSave({ _id: task._id, title, description, isCompleted: task.isCompleted, isImportant: isImportant })}
            >
              <CustomText>Сохранить</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditTaskModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 6,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancel: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  save: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#3498db',
    borderRadius: 8,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
});
