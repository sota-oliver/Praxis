export default{
    searchTerm: '',
    email: '',
    password: '',
    passwordConfirm: '',
    access: '',
    authorized: 0,
    noadds:false,
    selectedAdd: '',
    manageProfileAtStart: false,
    manageProfile: false,
    filterOpen: false,
    searchBarWebActive: false,
    homeActive: true,
    applicationsActive: false,
    profileActive: false,
    buttonAccepted: false,
    currentStep: 1,
    maxStep: 2,
    profileSetupComplete: false,
    companyHome: true,
    companyCandidates: false,
    companyNotifications: false,
    companyProfile: false,
    step1:true,
    step2:true,
    step3:true,
    cardsNotifications:[],
    cardNotification: '',
    cardsAdds:[],
    cardAd: '',
    newAd: null,
    adData: '',
    userData: '',
    cardsCandidates:[],
    cardCandidate: '',
    cardsStudents:[],
    cardStudent: '',
    cardsApplications:[],
    cardApplication: '',

    selected: false,
    selectedCandidate: '',
    selectedStudent: '',
    
    your_study: 'wwe',
    your_skills: 'sve',

    // database

        // ad
            // base

            job_position: 'job position',
            job_description: 'job description',
            job_requirements: 'job requirements',
            job_offers: 'What we offer to you',
            job_college: 'Collage',
            job_skills: 'Skills',
            postedAt: null,

            // student
            
            company_name_ad: 'asdasda',
            company_position_ad: 'asdasd',
            company_description_ad: 'asdasd',
            company_photo_ad: 'asdasd',

            // company

            student_name_ad: 'asdasd',
            student_photo_ad: 'asdasdasd',
            //company_position_ad: '',
            student_personal_ad: 'asdasdas',
            student_skills_ad: 'asdasdasd',
            student_dateof_ad: '03. 03. 2020.',
            student_age_ad: '22',

        // student

        student_name: 'John',
        student_birth: '12. April 1989.',
        student_town: 'Pula',
        student_email: 'john@email.com',
        student_college: 'Sveuciliste jurja dobrile u puli',
        student_skills: 'javascript, c++, html, css',
        student_personal: 'sports, music, dancing',
        student_phoneNum: '099239491',
        student_address: 'Avenija marina drzica',
        student_photo: 'photo',
        student_social: 'facebook, Myspace, Twitter, LinkedIn',
        student_oib: '12312515',

        // company

        company_name: 'Company name',
        company_address: 'Avenija marina drzica',
        company_phoneNum: '0993133123',
        company_email: 'company@email.com',
        company_description: 'Description of company',
        company_social: 'Facebook, MySpace, Twitter, LinkedIn',
        company_photo: 'photo',
        company_town: 'Tokyo',
        company_oib: '12312515',
}