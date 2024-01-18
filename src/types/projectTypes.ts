import {Status} from "@/types/statusType";
import {Technologies} from "@/types/Technologies";

export type Project = {
    ProjectTechnology: Technologies[];
    project_id: number;
    project_name: string;
    project_date_begin: string;
    project_date_end: string;
    project_description: string;
    project_github: string;
    project_url: string;
    project_image_path: string;
    project_summary: string
    status_id: string;
    project_status: Status;
};