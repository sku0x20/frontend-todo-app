import {Checkbox, List} from "../base_components/BaseComponents";
import './TodoList.scss';

export function TodoList({todoItems, onItemClick}) {

    return (
        <div className="todo-list">
            <List
                items={todoItems}
                ListItem={TodoListItem}
                listItemProp={(todoItem, index) => ({
                    key: todoItem.getId(),
                    todoItem: todoItem,
                    onCheck: () => onItemClick(todoItem, index)
                })}
            />
        </div>
    )
}

function TodoListItem({todoItem, onCheck}) {

    let strikeThrough = "none"
    if (todoItem.isDone()) {
        strikeThrough = "line-through"
    }

    return (
        <li className="todo-item">
            <span style={{textDecoration: strikeThrough}}>{todoItem.getNote()}</span>
            <Checkbox isChecked={todoItem.isDone()} onClick={onCheck}/>
        </li>
    );
}

