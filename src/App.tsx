import React, { Component } from 'react';
import '../src/styles/style.sass';
import UserService from './services/UserService';
import Employee from './models/Employee';
import Education from './models/Education';
import Certificate from './models/Certificate';
import Link from './models/Link';
import ExperienceItem from './components/ExperienceItem';
import WorkPlace from './models/WorkPlace';
import DateService from './services/DateService';


export default class App extends Component {

    state: any = {
        user: {},
        loading: true
    };

    userService = new UserService();
    dateService = new DateService();

    componentDidMount() {
        this.userService.getUser().then((res) => {
            this.setState({ user: res, loading: false });
        });
    }

    getImageBackground = (photo: string): any => {
        return {
            'backgroundImage': `url('${photo}')`
        };
    }

    render() {

        const { loading } = this.state;

        if (loading) {
            return (
                <div>Загрузка</div>
            );
        } else {
            return (
                <div className="wrapper">
                    <div></div>
                    <header className="header">
                        <div className="header__row">
                            <div className="header__contacts_print">
                                <div className="header__contact">
                                    <img src="img/linkedin-sm.svg" alt="" />
                                    <span>{this.state.user.linkedIdLink.name}</span>
                                </div>
                                <div className="header__contact">
                                    <img src="img/phone-sm.svg" alt="" />
                                    <span>{this.state.user.phone}</span>
                                </div>
                                <div className="header__contact">
                                    <img src="img/email-sm.svg" alt="" />
                                    <span>{this.state.user.email}</span>
                                </div>
                            </div>
                        </div>

                        <div className="header__photo" style={this.getImageBackground(this.state.user.photo)}></div>
                        <div className="header__info">
                            <h1 className="header__name">{`${this.state.user.lastName} ${this.state.user.firstName} ${this.state.user.middleName}`}</h1>
                            <span className="header__age">{this.dateService.getYearsWithCaption(this.state.user.birthDay)}</span>
                            <span className="header__place">{this.state.user.city}, {this.state.user.country}</span>
                        </div>

                        <div className="header__contacts bg-gray">
                            <div className="header__contact">
                                <img src="img/linkedin.svg" alt="" />
                                <a target="_blank" href={this.state.user.linkedIdLink.link}>{this.state.user.linkedIdLink.name}</a>
                            </div>
                            <div className="header__contact">
                                <img src="img/phone.svg" alt="" />
                                <span>{this.state.user.phone}</span>
                            </div>
                            <div className="header__contact">
                                <img src="img/email.svg" alt="" />
                                <a href={`mailto:${this.state.user.email}`}>{this.state.user.email}</a>
                            </div>
                        </div>

                    </header>

                    <div className="page">
                        <main className="main">
                            <div className="about section">
                                <h2 className="about__title title">Обо мне</h2>
                                <p className="about__text">{this.state.user.about}</p>
                            </div>

                            <div className="experience section">
                                <h2 className="experience__title title">Опыт работы</h2>
                                {
                                    this.state.user.work.map((el: WorkPlace, i: number) => {
                                        return (<ExperienceItem key={i} workplace = {el}></ExperienceItem>);
                                    })
                                }
                            </div>

                            {
                            /* <div className="recommendation section">
                                <h2 className="recommendation__title title">Рекомендации</h2>
                                <div className="recommendation__item">
                                    <h3 className="recommendation-item__title">Chris Lozac'h (YAWMP)</h3>
                                    <p className="recommendation-item__text">I don't know why I've taken so long to write this review, because Konstantin is awesome! Why? 1) Super intelligent 2) Diligent 3) Knows his stuff 4) Picks up the stuff he doesn't know with speed and humility 5) Likable and funny If I had to pick 10 people to work with on a desert island, Alex would rank.</p>
                                </div>

                                <div className="recommendation__item">
                                    <h3 className="recommendation-item__title">Юлия Подгорная (Orange Data)</h3>
                                    <p className="recommendation-item__text">Константин стал победителем организованного нами тендера, проявил творческий подход к поставленным задачам и зарекомендовал себя как квалифицированный веб-разработчик. Предложил уникальную архитектуру для нашего проекта.</p>
                                </div>

                                <div className="recommendation__item">
                                    <h3 className="recommendation-item__title">Олег Шевченко (Yandex)</h3>
                                    <p className="recommendation-item__text">Мы обратили внимание еще на этапе тендера на профессионализм Константиеа и четкость предлагаемых решений. В итоге сайт был заново сделан на 1С-Битрикс и перенесен без потерь весь архив. Посещаемость выросла с 300 человек до нескольких тысяч в день за время сотрудничества. На сегодня сайт стал весьма популярен среди специалистов нашей отрасли.</p>
                                </div>
                            </div> */
                            }

                        </main>

                        <div className="sidebar">
                            <div className="skills section">
                                <h2 className="skills__title title">Навыки</h2>
                                <div className="skills__list">
                                    {
                                        this.state.user.skills.map((el: string, i: number) => {
                                            return (<li key={i} className="skills-list__item">{el}</li>);
                                        })
                                    }
                                </div>
                            </div>
                            <div className="education section">
                                <h2 className="education__title title">Образование</h2>
                                {
                                    this.state.user.education.map((el: Education, i: number) => {
                                        return (
                                            <React.Fragment key={i}>
                                                <div className="education__university">{el.institution}</div>
                                                <div className="education__speciality">{el.specialty}</div>
                                                <div className="education__year">{el.year}</div>
                                            </React.Fragment>
                                        );
                                    })
                                }
                            </div>

                            <div className="certificates section">
                                <h2 className="certificates__title title">Сертификаты</h2>
                                {
                                    this.state.user.certificates.map((el: Certificate, i: number) => {
                                        return (
                                            <div className="certificates__item" key={i}>
                                                <p className="certificates__name">{el.name}</p>
                                                <p className="certificates__year">{el.year}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>

                            {
                                // Блок ссылок
                                this.state.user.links.length > 0
                                    ?
                                    <div className="links section">
                                        <h2 className="links__title title">Ссылки</h2>
                                        {
                                            this.state.user.links.map((el: Link, i: number) => {
                                                return (
                                                    <div className="links__item" key={i}>
                                                        <a href={el.urlLink} className="links__link" target="_blank">{el.urlLink}</a>
                                                        <p className="links__name">{el.description}</p>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                    :
                                    null
                            }

                            {
                                // Блок хобби
                                this.state.user.hobbies.length > 0
                                    ?
                                    <div className="hobby section">
                                        <h2 className="hobby__title title">Хобби</h2>
                                        <p className="hobby__text">{this.state.user.hobbies.join(', ')}</p>
                                    </div>
                                    :
                                    null
                            }

                            {
                                // Языки
                                this.state.user.languages.length
                                    ?
                                    <div className="languages section">
                                        <div className="languages__title title">Языки</div>
                                        <p className="languages__text">{this.state.user.languages.join(', ')}</p>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div >
            );
        }


    }

}
