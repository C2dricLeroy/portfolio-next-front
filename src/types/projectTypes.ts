import {Status} from "@/types/statusType";
import {Technology} from "@/types/Technology";

export type Project = {
    ProjectTechnology: Technology[];
    project_id: number;
    project_name: string;
    project_date_begin: string;
    project_date_end: string;
    project_description: string;
    project_github: string;
    project_url: string;
    project_image_path: string;
    status_id: string;
    project_status: Status;
};