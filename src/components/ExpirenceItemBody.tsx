import React, { Component } from "react";
import FullBody from "../models/FullBody";
import { Tracing } from "trace_events";

type Params = {
    body: FullBody
}

const ExpirenceItemBody = ({ body: {body, list} }: Params) => {

    var bodyControl = null;
    var listControl = null;

    if ((body != null) && (body != '')) {
        bodyControl = (
            <p>{body}</p>
        );
    }

    if (list.length > 0) {
        listControl = (
            <ul className="experience__list">
                {
                    list.map((l: string, i: number) => {
                        return (<li key={i} className="experience-list__item">{l}</li>);
                    })
                }
            </ul>
        );
    }

    return (
        <React.Fragment>
            {bodyControl}
            {listControl}
        </React.Fragment>
    );
}

export default ExpirenceItemBody;