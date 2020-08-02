import * as React from 'react';
import { Component, ReactNode } from 'react';
import WorkPlace from '../models/WorkPlace';
import DateService from '../services/DateService';
import Project from '../models/Project';
import ExpirenceItemBody from './ExpirenceItemBody';

type Props = {
    workplace: WorkPlace
}

export default class ExperienceItem extends Component<Props> {

    dateService = new DateService();

    getStyle = ((p: Project): any => {
        if (p.accordion) {
            return {
                bodyStyle: {},
                accordeonStyle: {},
                titleClasses: 'accordion__title',
                inputStyle: null,
                titleStyle: {

                },
                subtitleStyle: {

                }
            }
        } else {
            return {
                bodyStyle: {
                    display: 'block'
                },
                accordeonStyle: {
                    background: 'none'
                },
                titleClasses: 'accordion__title expanded',
                inputStyle: 'disabled',
                titleStyle: {
                    'cursor': 'default'
                },
                subtitleStyle: {
                    'marginBottom': '12px',
                    'cursor': 'default'
                }
            }
        }
    });

    render() {
        return (
            <div className="experience__item">
                <div className="experience-item__header">
                    <div className="experience-item__position">
                        <h3 className="experience-item__title">{this.props.workplace.positionName}</h3>
                        <p className="experience-item__subtitle">{this.dateService.getYearsAndMontsBetweenDatesCaption(this.props.workplace.startDate, this.props.workplace.endDate)}</p>
                    </div>
                    <div className="experience-item__place">
                        <h3 className="experience-item__title">{`${this.props.workplace.name}, ${this.props.workplace.city}`}</h3>
                        <p className="experience-item__subtitle">{this.dateService.getYearsAndMontsWithCaption(this.props.workplace.startDate, this.props.workplace.endDate)}</p>
                    </div>
                </div>
                <p className="experience-item__info">{this.props.workplace.positionDescription}</p>
                {
                    this.props.workplace.projects.map((el: Project, i: number) => {
                        let styles = this.getStyle(el);
                        return (
                            <div className="accordion" key={i}>
                                <div className="accordion__item bg-gray" style={styles.accordeonStyle}>
                                    <input disabled={styles.inputStyle} className="accordion__header" type="checkbox" id={`accordion-${i}${el.shortBody}`} />
                                    <label htmlFor={`accordion-${i}${el.shortBody}`}>
                                        <p style={styles.titleStyle} className={styles.titleClasses}>{el.shortBody}</p>
                                        <p style={styles.subtitleStyle} className="accordion__subtitle">{this.dateService.getYearsAndMontsBetweenDatesCaption(el.startDate, el.endDate)}</p>
                                    </label>
                                    <div className="accordion__body" style={styles.bodyStyle}>
                                        <ExpirenceItemBody body={el.fullBody} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        )
    }
}