import React, { useState } from 'react';
import {
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import { CreateTaskModel } from '../../store/state/taskStore/models/models';
import { CustomText } from '../text/customText';
import FireIcon from '../../assets/icons/fire.svg'
import colors from '../colors/colors';

interface Props {
  visible: boolean;
  onClose: () => void;
  onCreate: (newTask: CreateTaskModel) => void;
}

const CreateTaskModal: React.FC<Props> = ({ visible, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const resetFields = () => {
    setTitle('');
    setDescription('');
    setIsImportant(false);
  };


  return (
    <Modal visible={visible} transparent animationType="fade">
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
            <TouchableOpacity style={styles.cancel} onPress={() => {
              resetFields();
              onClose();
            }}>
              <CustomText color={colors.WHITE_COLOR}>Отмена</CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.create} onPress={()=>onCreate({title, description, isImportant, isCompleted: false})}>
              <CustomText color={colors.WHITE_COLOR}>Создать</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateTaskModal;

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
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  create: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#2ecc71',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
