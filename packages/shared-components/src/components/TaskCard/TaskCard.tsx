import React from 'react';
import styled, { css } from 'styled-components';
import { TaskCardProps } from './TaskCard.types';
import Button from '../Button';
import Card from '../Card';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return css`
        background-color: #d1fae5;
        color: #065f46;
      `;
    case 'in progress':
      return css`
        background-color: #dbeafe;
        color: #1e40af;
      `;
    default:
      return css`
        background-color: #fef3c7;
        color: #92400e;
      `;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return css`
        background-color: #fee2e2;
        color: #991b1b;
      `;
    case 'medium':
      return css`
        background-color: #fef3c7;
        color: #92400e;
      `;
    default:
      return css`
        background-color: #d1fae5;
        color: #065f46;
      `;
  }
};

const TaskCardContainer = styled(Card)`
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TaskHeader = styled.div`
  margin-bottom: 1rem;
`;

const TaskTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
`;

const TaskDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
`;

const TaskMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

const MetaLabel = styled.span`
  font-weight: 500;
  color: var(--color-text-secondary);
  min-width: 60px;
`;

const Status = styled.span<{ $status: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
  ${props => getStatusColor(props.$status)}
`;

const Priority = styled.span<{ $priority: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
  ${props => getPriorityColor(props.$priority)}
`;

const DueDate = styled.span`
  color: var(--color-text);
  font-weight: 500;
`;

const TaskActions = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;

  /* Responsive design */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onEdit,
  onDelete,
  className = '',
}) => {
  return (
    <TaskCardContainer className={className} padding="medium">
      <TaskHeader>
        <TaskTitle>{task.title}</TaskTitle>
        {task.description && (
          <TaskDescription>{task.description}</TaskDescription>
        )}
      </TaskHeader>

      <TaskMeta>
        <MetaItem>
          <MetaLabel>Status:</MetaLabel>
          <Status $status={task.status}>{task.status}</Status>
        </MetaItem>
        <MetaItem>
          <MetaLabel>Priority:</MetaLabel>
          <Priority $priority={task.priority}>{task.priority}</Priority>
        </MetaItem>
        {task.dueDate && (
          <MetaItem>
            <MetaLabel>Due:</MetaLabel>
            <DueDate>{new Date(task.dueDate).toLocaleDateString()}</DueDate>
          </MetaItem>
        )}
      </TaskMeta>

      <TaskActions>
        <Button variant="outline" size="small" onClick={() => onEdit(task)}>
          Edit
        </Button>
        <Button variant="danger" size="small" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </TaskActions>
    </TaskCardContainer>
  );
};

export default TaskCard;
