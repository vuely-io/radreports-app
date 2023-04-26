export const CustomerService = {
    getData() {
        return [
            {
                id: "1",
                servicerequest: "Projection radiography",
                status: "active",
                bodysite: "Brain",
                priority: "routine",
                time: "2023-04-16",
                reason: "Accident or fall"
            },
            {
                id: "2",
                servicerequest: "Ischemic stroke",
                status: "active",
                bodysite: "Brain",
                priority: "routine",
                time: "2023-04-16",
                reason: "Accident or fall"
            },
            {
                id: "3",
                servicerequest: "Cerebral arterial aneurysm",
                status: "active",
                bodysite: "Brain",
                priority: "routine",
                time: "2023-04-16",
                reason: "Accident or fall"
            },
            {
                id: "4",
                servicerequest: "Projection radiography",
                status: "active",
                bodysite: "Brain",
                priority: "routine",
                time: "2023-04-16",
                reason: "Accident or fall"
            },
            {
                id: "5",
                servicerequest: "Projection radiography",
                status: "active",
                bodysite: "Brain",
                priority: "routine",
                time: "2023-04-16",
                reason: "Accident or fall"
            },
        ];
    },

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    },

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    },

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    },

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    },

    getCustomers() {
        // const queryParams = params
        //     ? Object.keys(params)
        //         .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        //         .join('&')
        //     : '';
        return Promise.resolve(this.getData())
        // return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) => res.json());
    },

    // getServiceOrder(){
    //     return fetch('http://ehr.iradreports.com/hapi-fhir-jpaserver/fhir/ServiceRequest').then((res) => 
    //     console.log(res.json())
    //     // res.json()
    //     );
    // }
};
