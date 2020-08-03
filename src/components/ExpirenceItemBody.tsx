import React, { Component } from "react";
import FullBody from "../models/FullBody";

type Params = {
    body: FullBody
}

const ExpirenceItemBody = ({ body }: Params) => {

    var bodyControl = null;
    var listControl = null;

    if ((body.body != null) && (body.body != '')) {
        bodyControl = (
            <p>{body.body}</p>
        );
    }

    if (body.list.length > 0) {
        listControl = (
            <ul className="experience__list">
                {
                    body.list.map((l: string, i: number) => {
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