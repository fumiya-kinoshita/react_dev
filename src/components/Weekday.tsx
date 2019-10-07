import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { store } from '../index';
import * as formActions from '../actions/formActions';

interface WeekdayState {
    form: {
        period: string,
        subject: string,
        weekday: string
    },
    setWeekday: (weekday: string)=>void
};

class Weekday extends React.Component<WeekdayState, {}> {

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        this.props.setWeekday(e.currentTarget.value);
    }

    render() {
        return(
            <div>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <select>
                        <option value="月曜日">月曜日</option>
                        <option value="火曜日">火曜日</option>
                        <option value="水曜日">水曜日</option>
                        <option value="木曜日">木曜日</option>
                        <option value="金曜日">金曜日</option>
                    </select>
                </form>
            </div>
        )
    }
}

type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: any) => {
    return {
        form: state.formReducer,
        user: state.userReducer
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return (
        bindActionCreators({
            ...formActions
        }, dispatch)
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Weekday);