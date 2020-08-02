import * as React from 'react';
import data from '../data/me.json';
import Employee from '../models/Employee';
import EmployeeResolver from '../resolvers/EmployeeResolver';
import { promises } from 'dns';

export default class UserService {

    constructor(){

    }

    employeeResolver = new EmployeeResolver();

    async getUser(): Promise<Employee> {
        let employee: Employee  = this.employeeResolver.convertDataToEntity(data);
        return Promise.resolve(employee);
    }
};