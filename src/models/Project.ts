import FullBody from "./FullBody";

export default interface Project {
    startDate: Date,
    endDate: Date,
    shortBody: string,
    fullBody: FullBody,
    accordion?: boolean | true
}