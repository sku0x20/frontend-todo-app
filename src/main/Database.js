import {AbstractClassException, AbstractMethodException} from "./AbstractExceptions";

/**
 * Interface Database.
 * @class Database
 */
export default class Database {
    constructor() {
        if (this.constructor === Database) {
            throw new AbstractClassException("Database")
        }
    }

    /**
     * @abstract
     * @param {TodoItem} todoItem
     * @return {void}
     */
    insertTodo(todoItem) {
        throw new AbstractMethodException()
    }

    /**
     * @abstract
     */
    getTodoItems() {
        throw new AbstractMethodException()
    }

}