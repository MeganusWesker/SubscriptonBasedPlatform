export interface UserDocument{
    _id:string,
    name: string;
    email: string;
    password: string;
    role: string;
    subscription: {
        id: string | undefined;
        status: string | undefined;
    };
    avatar?: {
        public_id: string;
        url: string;
    };
    playlist: Array<{
        course: string;
        poster: string;
    }>;
    createdAt: string;
    verified: boolean;
    resetPasswordToken: string;
    resetPasswordExpire: string;
    otp: number;
    otp_expiry: Date;
  
}

export interface ICourseDocument  {
    _id:string;
    title:string;
    description:string;
    poster: {
        public_id: string;
        url: string;
    };
    lectures:Array<
        {
         _id:string,   
         title:string,
         description:string, 
         video:{
             public_id:string,     
             url:string, 
         }
        }
     >
     
     views:number,
     numOfVideos:number,
    category:string,
    createdBy:string,
    createdAt:string,

}



export interface IStatsDocument{
    users:number,
    views:number,
    subscriptions:number,
    createdAt:string
} 

export const categoryType: string[] = [
    "App Development",
     "Web Development",
     "DataStructrue & Algorithms",
     "Bussiness",
     "Self Development"
];