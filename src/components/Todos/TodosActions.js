import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  comletedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Compledet todos"
        onClick={deleteCompletedTodos}
        disabled={!comletedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
