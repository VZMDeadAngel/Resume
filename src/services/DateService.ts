export default class DateService {

    constructor() {

    }

    private getFullYearBetweenDates = (from: Date, to: Date = new Date()): number => {
        const ageDifMs = to.getTime() - from.getTime();
        const ageDate = new Date(ageDifMs);
        const years: number = Math.abs(ageDate.getUTCFullYear() - 1970);
        return years;
    }

    private getFullMontsBetweenDates = (from: Date, to: Date = new Date()): number => {
        const ageDifMs = to.getTime() - from.getTime();
        const monts: number = Math.ceil(ageDifMs / (1000 * 60 * 60 * 24 * 30));
        return monts;
    }

    private getYearsCaption = (years: number): string => {
        if (((years > 10) && (years < 20)) || (years % 10 === 0) || ((Math.abs(years) % 10) > 4)) {
            return 'лет';
        } else {
            if (years.toString()[years.toString().length - 1] === '1') {
                return 'год';
            } else {
                return 'года';
            }
        }
    }

    private getMontsCaption = (monts: number): string => {
        if (monts === 1) { return 'месяц'; }
        else if ((monts > 1) && (monts < 5)) { return 'месяца'; }
        else { return 'месяцев'; }
    }

    private getFullDateCaption = (date: Date): string => {
        switch (date.getMonth()) {
            case 0:
                return `январь ${date.getFullYear()}`;
                break;
            case 1:
                return `февраль ${date.getFullYear()}`;
                break;
            case 2:
                return `март ${date.getFullYear()}`;
                break;
            case 3:
                return `апрель ${date.getFullYear()}`;
                break;
            case 4:
                return `май ${date.getFullYear()}`;
                break;
            case 5:
                return `июнь ${date.getFullYear()}`;
                break;
            case 6:
                return `июль ${date.getFullYear()}`;
                break;
            case 7:
                return `август ${date.getFullYear()}`;
                break;
            case 8:
                return `сентябрь ${date.getFullYear()}`;
                break;
            case 9:
                return `октябрь ${date.getFullYear()}`;
                break;
            case 10:
                return `ноябрь ${date.getFullYear()}`;
                break;
            case 11:
                return `декабрь ${date.getFullYear()}`;
                break;
            default:
                return '';
        }
    }

    public getYearsWithCaption(from: Date, to: Date = new Date()): string {
        let years = this.getFullYearBetweenDates(from, to);
        return `${years} ${this.getYearsCaption(years)}`;
    }

    public getYearsAndMontsWithCaption(from: Date, to: Date = new Date()): string {
        let monts = this.getFullMontsBetweenDates(from, to);
        let modulusMonts = monts % 12;
        let fullYears = Math.trunc(monts / 12);
        let res = '';
        if (fullYears > 0) { res += `${fullYears} ${this.getYearsCaption(fullYears)}` }
        if (modulusMonts > 0) { res += ` ${modulusMonts} ${this.getMontsCaption(modulusMonts)}` }
        return res;
    }

    public getYearsAndMontsBetweenDatesCaption(from: Date, to?: Date): string {
        let res = '';
        res += this.getFullDateCaption(from);
        res += ' - ';
        if (to == null) {
            res += 'по настоящее время';
        } else {
            res += this.getFullDateCaption(to);
        }

        return res;
    }

};