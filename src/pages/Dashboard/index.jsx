import { Box, IconButton, Grid, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useMemo } from 'react';
import {
  TextBox,
  Card,
  Button,
  ListTable,
  PointListing,
  Text,
  AddTaskModal,
  Piechart,
  CheckBox,
} from '@/components';
import { useTasks } from '@/context';
import { useTheme } from '@mui/material/styles';

export default function Dashboard() {
  const theme = useTheme();

  const { tasks, addTask, updateTask, stats, deleteTask } = useTasks();

  const CHART_DATA = [
    { name: `Completed Task`, value: stats.completed },
    { name: `Pending`, value: stats.pending },
  ];

  const [search, setSearch] = useState(``);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  const [taskName, setTaskName] = useState(``);

  const latestTasks = useMemo(() => tasks.slice(0, 3), [tasks]);

  const filteredTasks = tasks.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()));

  const saveTask = (name) => {
    if (selectedTask) {
      updateTask({ ...selectedTask, name });
    } else {
      addTask({ id: String(Date.now()), name, isTaskCompleted: false });
    }

    setSelectedTask(null);
    setTaskName(``);
    setIsModalVisible(false);
  };

  const modifyTaskName = (task) => {
    setSelectedTask(task);
    setTaskName(task.name);
    setIsModalVisible(true);
  };

  if (tasks.length === 0) {
    return (
      <Box>
        <Box
          sx={{
            minHeight: `80vh`,
            display: `flex`,
            alignItems: { xs: `flex-start`, sm: `center` },
            justifyContent: `center`,
            px: { xs: 0, sm: 2 },
            py: { xs: 2 },
          }}
        >
          <Card
            sx={{
              textAlign: `center`,
              maxWidth: { sm: 280 },
              width: `100%`,
              py: 2,
              borderRadius: { xs: 0, sm: 1 },
            }}
          >
            <Text variant={`h6`} fontWeight={500} sx={{ textAlign: `center` }}>
              {`You have no tasks.`}
            </Text>

            <Button
              dataTestid={`new-task-button`}
              sx={{ mt: 2 }}
              onClick={() => setIsModalVisible(true)}
            >
              {`+ New Task`}
            </Button>
          </Card>
        </Box>
        <AddTaskModal
          open={isModalVisible}
          onSave={saveTask}
          taskName={taskName}
          setTaskName={setTaskName}
          onClose={() => setIsModalVisible(false)}
        />
      </Box>
    );
  }

  return (
    <Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: {
                xs: 0,
                sm: 1,
              },
            }}
            contentSx={{
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `space-between`,
              height: `100%`,
            }}
          >
            <Text variant={`h5`} sx={{ opacity: 0.7 }}>
              {`Tasks Completed`}
            </Text>

            <Stack flexDirection={`row`} alignItems={`baseline`}>
              <Text
                sx={{
                  fontWeight: 500,
                  position: `relative`,
                  bottom: `10px`,
                }}
                variant={`h2`}
                color={theme.palette.primary.main}
              >
                {stats.completed}
              </Text>

              <Text>{`/${stats.total}`}</Text>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: {
                xs: 0,
                sm: 1,
              },
            }}
          >
            <Text variant={`h5`} sx={{ mb: 1.5 }}>
              {`Latest Created Tasks`}
            </Text>

            <PointListing
              list={latestTasks.map((t, i) => ({
                value: i,
                children: (
                  <Text
                    sx={{
                      textDecoration: t.isTaskCompleted ? `line-through` : `none`,
                    }}
                  >
                    {t.name}
                  </Text>
                ),
              }))}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: {
                xs: 0,
                sm: 1,
              },
            }}
            contentSx={{ p: 0 }}
            contentPadding={0}
          >
            <Piechart height={150} data={CHART_DATA} showLabelList={[`Completed Task`]} />
          </Card>
        </Grid>
      </Grid>

      <Stack
        direction={{ xs: `column`, sm: `row` }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ py: 2, mt: 2 }}
      >
        <Text variant="h6">{`Tasks`}</Text>

        <Stack
          direction={{ xs: `column`, sm: `row` }}
          spacing={2}
          sx={{ width: { xs: `100%`, sm: `auto` }, px: { xs: 2, sm: 0 } }}
        >
          <TextBox
            value={search}
            onChange={setSearch}
            placeholder={`Search by task name`}
            leftIcon={<SearchIcon />}
            sx={{ minWidth: { xs: `100%`, sm: 250 } }}
          />
          <Button onClick={() => setIsModalVisible(true)}>{`+ New Task`}</Button>
        </Stack>
      </Stack>

      <ListTable
        items={filteredTasks.map((task) => {
          return {
            ...task,
            value: task.isTaskCompleted,
          };
        })}
        renderLeft={(task) => (
          <CheckBox
            checked={task.isTaskCompleted}
            onChange={(checked) => updateTask({ ...task, isTaskCompleted: checked })}
          />
        )}
        renderRight={(task) => (
          <Stack direction="row" spacing={1}>
            <IconButton onClick={() => modifyTaskName(task)}>
              <EditIcon fontSize="medium" />
            </IconButton>
            <IconButton onClick={() => deleteTask(task.id)}>
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </Stack>
        )}
      />

      <AddTaskModal
        open={isModalVisible}
        onSave={saveTask}
        taskName={taskName}
        setTaskName={setTaskName}
        onClose={() => setIsModalVisible(false)}
      />
    </Box>
  );
}
