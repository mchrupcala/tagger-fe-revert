import expect from 'expect'
import actions from './sidebar.actions'
import {getLabelList} from '../../api'
import { Item } from 'react-bootstrap/lib/Pagination'

describe('actions', () => {

    function stateBefore(){
        return{
            lableLists
        }
    }

    const action = {
        type: 'GET_LABELS',
        payload: 'labelList'
    }

    it('should add labels', () => {
        const action = {}
        const actual = actions(stateBefore(), action)
        const expected = {
            labelLists
        }
    })
})
