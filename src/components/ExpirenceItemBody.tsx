import React, { Component } from "react";
import FullBody from "../models/FullBody";

type Props = {
    body: FullBody
}

export default class ExpirenceItemBody extends Component<Props> {


    render() {

        var body = null;
        var list = null;

        if (this.props.body.body != null) {
            body = (
                <p>{this.props.body.body}</p>
            );
        }

        if (this.props.body.list.length > 0) {
            list = (
                <ul className="experience__list">
                    {
                        this.props.body.list.map((l: string, i: number) => {
                            return (<li key={i} className="experience-list__item">{l}</li>);
                        })
                    }
                </ul>
            );
        }

        return (
            <React.Fragment>
                {body}
                {list}
            </React.Fragment>
        );
    }
}