import React, {  } from 'react';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList, RefreshControl, TouchableOpacity, Platform, UIManager, LayoutAnimation } from 'react-native';
import taskStore from '../../store/state/taskStore/taskStore';
import { CustomText } from '../../components/text/customText';
import gs from '../../styles/global';
import TaskCard from '../../components/taskCard/taskCard';
import { CreateTaskModel, TaskModel } from '../../store/state/taskStore/models/models';
import colors from '../../components/colors/colors';
import EditTaskModal from '../../components/editTaskModal/editTaskModal';
import CreateTaskModal from '../../components/createTaskModal/createTaskModal';
import FilterBar from '../../components/filterBar/filterBar';

export const Main = observer(() => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [createModalVisible, setCreateModalVisible] = useState(false);

    const [taskToEdit, setTaskToEdit] = useState<TaskModel>();

    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        taskStore.getTasks();
    }, []);
    const onRefresh = async () => {
        setRefreshing(true);
        taskStore.getTasks();
        setRefreshing(false);
    };


    const handleToggle = (id: string, val: boolean) => {
        const task = taskStore.tasks.find((task: TaskModel)=>task._id===id)
        if (task) taskStore.updateTask({...task, isCompleted: val})
    }

    const handleEdit = (task: TaskModel) => {
        setTaskToEdit(task);
        setIsModalVisible(true);
    };

    const handleSave = (updatedTask: TaskModel) => {
        taskStore.updateTask(updatedTask);
        taskStore.updateTaskApi(updatedTask);
        setIsModalVisible(false);
    };

    const handleDelete = (id: string) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        taskStore.setTasks(taskStore.tasks.filter((task) => task._id !== id));
        taskStore.deleteTask(id)
    };


   const handleCreate = async (newTask: CreateTaskModel) => {
        await taskStore.createTask(newTask);
        await taskStore.getTasks();  
        setCreateModalVisible(false)
    };


  return (
    <> 
    <FlatList
       style={styles.container}
       keyExtractor={(item) => item._id.toString()}
       refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
       ListHeaderComponent={<>
        <View style={styles.headerContent}>
            <CustomText style={[gs.fontBody1,gs.bold]} color={colors.BLACK_COLOR}>Список задач</CustomText>
            <TouchableOpacity style={styles.addButton}>
                <CustomText onPress={()=>setCreateModalVisible(true)} style={gs.bold} color={colors.WHITE_COLOR}>
                    Создать
                </CustomText>
            </TouchableOpacity>
        </View>
        <FilterBar />
        </>}
    //    ListFooterComponent={<>
    //         <View style={gs.mt16} />
    //         {taskStore.isLoading && <ActivityIndicator animating size={'large'} />}
    //         <View style={{height: 140}} />
    //    </>}
       ListEmptyComponent={!taskStore.isLoading ? 
       <View style={styles.notFound}>
            <CustomText>Список задач пуст</CustomText>
       </View> : null}
       ItemSeparatorComponent={()=><View style={gs.mt16} />}
       data={taskStore.filteredTasks}
        renderItem={({ item }) => (
            <TaskCard
            task={item}
            onToggleComplete={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
            />
        )}

       />
       {isModalVisible && (
        <EditTaskModal
            visible={isModalVisible}
            task={taskToEdit}
            onClose={() => setIsModalVisible(false)}
            onSave={handleSave}
        />
        )}
         <CreateTaskModal
            visible={createModalVisible}
            onClose={() => setCreateModalVisible(false)}
            onCreate={handleCreate}
        />
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    padding:12,
    minHeight: '100%',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  cardStyle: {
    flexDirection: 'row',
  },
  addButton: {
    padding: 6,
    backgroundColor: colors.OCEAN_COLOR,
    borderRadius: 8,
    alignItems: 'center'
  },
  value: {
    marginLeft: 8,
  },
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notFound: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 12,
    paddingHorizontal: 32,
    textAlign: 'center',
  },
});

