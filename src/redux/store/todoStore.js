
import * as redux from 'redux';
import {todoReducer} from '../reducres/todoReducer';

export const store = redux.createStore(todoReducer);