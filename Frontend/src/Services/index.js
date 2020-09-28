import axios from 'axios'


let Service = axios.create({
    baseURL: '',
    timeout: 1000
})

Service.interceptors.request.use((request) => {
    try {
        request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
    } catch (e) {
        console.error(e);
    }
    return request;
});

let Users = {
    async getOne(id){
        let response = await Service.get('/users', id);
        return response.data.map(doc=>{
            return {
                id: doc._id,
                email: doc.student_email,
                posted_at: Number(doc.postedAt),
                oib: doc.student_oib,
                name: doc.student_name,
                study: doc.student_college,
            };
        });
        
    },
    async replaceOne(id, replaceData){
        console.log(id, replaceData)
        try{
            await Service.put(`/users/${id}`, replaceData);
        }catch(e){
            console.log(e)
        }
    },
    async getAll(){
        let response = await Service.get(`/users`);
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc._id,
                email: doc.student_email,
                posted_at: Number(doc.postedAt),
                oib: doc.student_oib,
                name: doc.student_name,
            };
        });
        return data;
    },
    insertOne(userData){
        return Service.post('/users', userData);
    },
}
let Notifications = {
    async getOne(id){
        let response = await Service.get(`/notifications/${id}`);
        let doc = response.data;
        return {
                id: doc._id,
                student_name: doc.student_name,
                job_description: doc.job_description,
                job_requirements: doc.job_requirements
            };
    },
    async getAll(id){
        let response = await Service.get(`/notifications/${id}`);
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc._id,
                job_position: doc.job_description,
                name: doc.student_name,
                study: doc.your_study,
                };
        });
        return data;
    },
    insertOne(doc){
        return Service.post('/notifications', doc);
    },
};

let Candidates = {

    async getOne(id){
        let response = await Service.get(`/candidates/${id}`);
        let doc = response.data;
        return {
                id: doc._id,
                student_name: doc.student_name,
                job_description: doc.job_description,
                job_requirements: doc.job_requirements
            };
    },
    async updateOne(id, accept){
        let response = await Service.patch(`/candidates/${id}`, accept);
        return response.data;
    },
    async getAll(id){
        let response = await Service.get(`/candidates/${id}`);
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc._id,
                student_id: doc.student_id,
                job_position: doc.job_description,
                name: doc.student_name,
                study: doc.your_study,
                };
        });
        return data;
    },
    insertOne(doc){
        return Service.post('/candidates', doc);
    },

}

let Applications = {

    async getOne(id){
        let response = await Service.get(`/applications/${id}`);
        let doc = response.data;
        return {
                id: doc._id,
                company_id: doc.company_id,
                company_name: doc.company_name,
                job_description: doc.job_description,
                job_requirements: doc.job_requirements
            };
    },
    async getAll(id){
        let response = await Service.get(`/applications/${id}`);
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc._id,
                company_id: doc.company_id,
                company_name: doc.company_name,
                job_position: doc.job_description,
                name: doc.company_name,
                study: doc.your_study,
                accepted: doc.accepted
                };
        });
        return data;
    },
    insertOne(doc){
        return Service.post('/applications', doc);
    },
}

let Adds = {
    insertOne(doc){
        return Service.post('/ad', doc);
    },
    async GetAllAdds(searchTerm){
        let options = {};

        if (searchTerm) {
            options.params = {
                _any: searchTerm,
            };
        }
        let response = await Service.get(`/adds`, options);
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc._id,
                job_position: doc.job_position,
                job_description: doc.job_description,
                job_requirements: doc.job_requirements,
                job_offers: doc.job_offers,
                your_skills: doc.your_skills,
                your_study: doc.your_study,
                postedAt: Number(doc.postedAt),
                };
        });
        return data;
        
    },
    async getAllAdds(){
        
        let response = await Service.get(`/adds`);
        let data = response.data

        console.log(response.data);

        data = data.map((doc) => {
            return {
                id: doc._id,
                job_position: doc.job_position,
                job_description: doc.job_description,
                job_requirements: doc.job_requirements,
                job_offers: doc.job_offers,
                your_skills: doc.your_skills,
                your_study: doc.your_study,
                postedAt: Number(doc.postedAt),
                };
        });
        return data;
        
    },
    async getOne(id){
        let response = await Service.get(`/adds/${id}`);
        let doc = response.data;

        return {
                id: doc._id,
                company_name: doc.company_name,
                company_id: doc.company_id,
                job_position: doc.job_position,
                job_description: doc.job_description,
                job_requirements: doc.job_requirements,
                job_offers: doc.job_offers,
                your_skills: doc.your_skills,
                your_study: doc.your_study,
                postedAt: Number(doc.postedAt),
            };
        }
};
let Auth = {
    async login(username, password, authorized, ){
        let response = await Service.post('/auth', {
            username: username,
            password: password,
            authorized: authorized,
        });

        let user = response.data;

        localStorage.setItem("user", JSON.stringify(user));

        return true;
    },
    logout(){
        localStorage.removeItem("user");
        return true;
    },
    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    },
    getToken(){
        let user = Auth.getUser()
        if(user && user.token){
            return user.token
        }else{
            return false;
        }
    },
    authenticated(){
        let user = Auth.getUser();
        if(user && user.token){
            return true
        }else{
            return false
        }
    },
    state: {
        get authenticated(){
            return this.authenticated();
        }
    }
}
export {Service , Users, Adds, Auth, Notifications, Candidates, Applications}
