import * as React from 'react';

interface SubjectState {
    subject: string
}

class Subject extends React.Component<{}, SubjectState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            subject: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.setState({ subject: e.currentTarget.value });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={(e: React.FormEvent<HTMLInputElement>)=>{
                        this.setState({ subject: e.currentTarget.value });
                    }} />
                    <button type="submit">提出</button>
                </form>
                {this.state.subject}
            </div>
        )
    }
}

export default Subject;