import * as React from 'react';

interface WeekdayState {
    weekday: string
};

class Weekday extends React.Component<{}, WeekdayState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            weekday: "月曜日"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.FormEvent<HTMLSelectElement>) {
        this.setState({ weekday: e.currentTarget.value });
    }

    render() {
        return(
            <div>
                <form>
                    <select value={this.state.weekday} onChange={this.handleChange} >
                        <option value="月曜日">月曜日</option>
                        <option value="火曜日">火曜日</option>
                        <option value="水曜日">水曜日</option>
                        <option value="木曜日">木曜日</option>
                        <option value="金曜日">金曜日</option>
                    </select><br />
                    {this.state.weekday}
                </form>
            </div>
        )
    }
}

export default Weekday;