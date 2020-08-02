import Education from "./Education";
import Certificate from "./Certificate";
import linkedIdLink from "./linkedIdLink";
import Link from "./Link";
import WorkPlace from "./WorkPlace";

export default interface Employee {
    photo?: string,
    lastName?: string,
    firstName?: string,
    middleName?: string,
    birthDay?: Date,
    city?: string,
    country?: string,
    linkedIdLink?: linkedIdLink,
    phone?: string,
    email?: string,
    about?: string,
    skills?: string[],
    education?: Education[],
    certificates?: Certificate[],
    links?: Link[],
    hobbies?: string[],
    languages?: string[],
    work?: WorkPlace[]
}