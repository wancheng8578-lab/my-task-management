import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import Dashboard from '.';

const mockContext = {
  tasks: [],
  stats: { total: 0, completed: 0, pending: 0 },
  addTask: vi.fn(),
  updateTask: vi.fn(),
  deleteTask: vi.fn(),
};

vi.mock(`@/context`, () => ({
  useTasks: () => mockContext,
}));

describe(`Dashboard (Empty State)`, () => {
  beforeEach(() => {
    cleanup();
    mockContext.tasks = [];
    mockContext.stats = { total: 0, completed: 0, pending: 0 };
    mockContext.addTask = vi.fn();
    mockContext.updateTask = vi.fn();
    mockContext.deleteTask = vi.fn();
  });

  test(`shows empty state message`, () => {
    render(<Dashboard />);
    expect(screen.getByText(`You have no tasks.`)).toBeInTheDocument();
  });

  test(`opens modal when clicking + New Task button`, () => {
    render(<Dashboard />);
    fireEvent.click(screen.getByRole(`button`, { name: /\+ New Task/i }));

    expect(screen.getByLabelText(`Task name`)).toBeInTheDocument();
    expect(screen.getByRole(`button`, { name: /save/i })).toBeInTheDocument();
  });
});
