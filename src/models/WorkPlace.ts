import Project from "./Project";

export default interface WorkPlace {
    startDate: Date,
    endDate: Date
    city: string,
    name: string,
    positionName: string,
    positionDescription: string,
    projects: Project[]
}