import { TextBox, Text, Button, Modal } from '@/components';
import { Stack } from '@mui/material';

const Component = ({
  open,
  title = `+ New Task`,
  label = `Task name`,
  taskName,
  setTaskName,
  onSave,
  onClose,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) {
      return;
    }
    onSave(taskName);
  };

  return (
    <Modal dataTestid={`add-task-modal`} open={open} onClose={onClose}>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        flexDirection={`column`}
        sx={{ pt: 1 }}
        gap={1}
      >
        <Text dataTestid={`task-name-input`} variant={`h6`} sx={{ mb: 2 }}>
          {title}
        </Text>
        <TextBox label={label} value={taskName} onChange={setTaskName} required />

        <Button fullWidth sx={{ mt: 1 }} type="submit">
          {`Save`}
        </Button>
      </Stack>
    </Modal>
  );
};

export { Component };
