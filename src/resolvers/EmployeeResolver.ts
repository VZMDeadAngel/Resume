import Employee from "../models/Employee";
import WorkPlace from "../models/WorkPlace";
import Project from "../models/Project";

export default class EmployeeResolver {
    public convertDataToEntity(item: any): Employee {
        const entity: Employee = {
            photo: item.photo,
            lastName: item.lastName,
            firstName: item.firstName,
            middleName: item.middleName,
            birthDay: this.parseDate(item.birthDay),
            city: item.city,
            country: item.country,
            about: item.about,
            skills: item.skills,
            education: item.education,
            certificates: item.certificates,
            email: item.email,
            phone: this.formatPhone(item.phone),
            linkedIdLink: item.linkedIdLink,
            languages: item.languages,
            hobbies: item.hobbies,
            links: item.links,
            work: this.processWorks(item.work)
        };
        return entity;
    }

    private parseDate(date?: string): Date {
        if (date == null) {
            return new Date()
        };
        var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
        var dt = new Date(date.replace(pattern, '$3-$2-$1'));
        return dt;
    }

    private formatPhone(phone: string) {
        let clearPatten = /(\D)/g
        let clearPhone = phone.replace(clearPatten, '');
        let formatPattern = /(^[0-9])([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/g;
        return clearPhone.replace(formatPattern, '$1 ($2) $3-$4-$5');
    }

    private processWorks(work: any[]): WorkPlace[] {
        let places: WorkPlace[] = [];
        work.forEach((w) => {
            const entity: WorkPlace = {
                city: w.city,
                name: w.name,
                startDate: this.parseDate(w.startDate),
                endDate: this.parseDate(w.endDate),
                positionName: w.positionName,
                positionDescription: w.positionDescription,
                projects: this.processProjects(w.projects)
            }

            places.push(entity);
        });

        return places;
    }

    private processProjects(sourseProjects: any[]): Project[] {
        let projects: Project[] = [];
        sourseProjects.forEach((p) => {
            const entity: Project = {
                startDate: this.parseDate(p.startDate),
                endDate: this.parseDate(p.endDate),
                shortBody: p.shortBody,
                fullBody: p.fullBody,
                accordion: p.accordion == null ? true : p.accordion
            }
            projects.push(entity);
        });

        return projects;
    }
}