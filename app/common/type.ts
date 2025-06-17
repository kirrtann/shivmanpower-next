export interface jobtype {
    id: number
    img?: string
    Job?: string
    department?: string
    time?: string
    location?: string;
    profile?: {
        type?: string,
        profiledecription?: string
    }
    contact?: {
        website: string;
        phone: string;
        email: string;

    }
    overview?: {
        salary?: string,
        careerLevel?: string,
        experience?: string,
        qualification?: string,
    }
    JobProfile?:{
        JobProfile?:string
    }
    description?: string[]
}

export interface IMageProps {
    header?: string;
    pere?: string;
    detail?: string;
    time?: string;
    location?: string
    headercss?:string
}