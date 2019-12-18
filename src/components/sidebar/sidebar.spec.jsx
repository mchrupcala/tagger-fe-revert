import configureStore from 'redux-mock-store';

import * as selectActions from '../sidebar/sidebar.actions'
import { getLabelList } from '../../api';

const mockStore = configureStore()
const store = mockStore()

describe('sidebar.actions', () =>{
    beforeEach(() => {
        store.clearActions();
    })
})

describe('getLabels', () => {
    test('dispatches correct action and payload', () => {
        const expectedActions =[
            {
                'payload': 'getLabelList',
                'type': 'GET_LABELS'
            }
        ]

        store.dispatch(selectActions.getLabels(getLabelList))
        expect(store.getActions()).toEqual(expectedActions)
    })
})