import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { store } from '../index';
import * as formActions from '../actions/formActions';

interface PeriodProps {
    form: {
             period: string,
             subject: string,
             weekday: string
           },
    setPeriod: (period: string)=>void,
    setSubject: (subject: string)=>void,
    setWeekday: (weekday: string)=>void
}

class Period extends React.Component<PeriodProps, {}> {

    handleChange(e: React.FormEvent<HTMLSelectElement>) {        
        formActions.setPeriod(e.currentTarget.value);     
    }

    render() {
        return(
            <div>
                <form>
                    <select value={this.props.form.period} onChange={this.handleChange}>
                        <option value="一限">一限</option>
                        <option value="二限">二限</option>
                        <option value="三限">三限</option>
                        <option value="四限">四限</option>
                        <option value="五限">五限</option>
                        <option value="六限">六限</option>
                    </select>
                </form>
                {this.props.form.period}
            </div>
        )
    }
}

type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: any) => {
    return {
        form: state.formReducer,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return (
        bindActionCreators({
            ...formActions
        }, dispatch)
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Period);