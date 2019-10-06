import * as React from 'react';

interface PeriodState {
    period: string
}

class Period extends React.Component<{}, PeriodState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            period: "一限"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.FormEvent<HTMLSelectElement>) {
        this.setState({ period: e.currentTarget.value })        
    }

    render() {
        return(
            <div>
                <form>
                    <select value={this.state.period} onChange={this.handleChange}>
                        <option value="一限">一限</option>
                        <option value="二限">二限</option>
                        <option value="三限">三限</option>
                        <option value="四限">四限</option>
                        <option value="五限">五限</option>
                        <option value="六限">六限</option>
                    </select>
                </form>
                {this.state.period}
            </div>
        )
    }
}

export default Period;