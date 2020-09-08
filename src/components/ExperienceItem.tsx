import * as React from 'react';
import { Component, ReactNode } from 'react';
import WorkPlace from '../models/WorkPlace';
import DateService from '../services/DateService';
import Project from '../models/Project';
import ExpirenceItemBody from './ExpirenceItemBody';

type Params = {
    workplace: WorkPlace
}

const ExperienceItem = ({ workplace }: Params) => {

    const dateService = new DateService();

    const getStyle = ((p: Project, nextp?: Project): any => {
        if (p.accordion) {
            return {
                bodyStyle: {},
                accordeonStyle: {
                    marginBottom: (nextp != null && !nextp.accordion) ? '0px' : ''
                },
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
                    background: 'none',
                    paddingBottom: '0px'
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

    return (
        <div className="experience__item">
            <div className="experience-item__header">
                <div className="experience-item__position">
                    <h3 className="experience-item__title">{workplace.positionName}</h3>
                    <p className="experience-item__subtitle">{dateService.getYearsAndMontsBetweenDatesCaption(workplace.startDate, workplace.endDate)}</p>
                </div>
                <div className="experience-item__place">
                    <h3 className="experience-item__title">{`${workplace.name}, ${workplace.city}`}</h3>
                    <p className="experience-item__subtitle">{dateService.getYearsAndMontsWithCaption(workplace.startDate, workplace.endDate)}</p>
                </div>
            </div>
            <p className="experience-item__info">{workplace.positionDescription}</p>
            {
                workplace.projects.map((el: Project, i: number) => {
                    let styles = getStyle(el, workplace.projects[i + 1]);
                    return (
                        <div className="accordion" key={i}>
                            <div className="accordion__item bg-gray" style={styles.accordeonStyle}>
                                <input disabled={styles.inputStyle} className="accordion__header" type="checkbox" id={`accordion-${i}${el.shortBody}`} />
                                <label htmlFor={`accordion-${i}${el.shortBody}`}>
                                    <p style={styles.titleStyle} className={styles.titleClasses}>{el.shortBody}</p>
                                    <p style={styles.subtitleStyle} className="accordion__subtitle">{dateService.getYearsAndMontsBetweenDatesCaption(el.startDate, el.endDate)}</p>
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
};

export default ExperienceItem;