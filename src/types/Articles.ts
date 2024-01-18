import {ArticleCategory} from "@/types/ArticleCategory";
import {Status} from "@/types/statusType";

export type Article = {
    id: number
    title: string
    content: string
    created_at: string
    link: string
    status_id: number
    article_categories: ArticleCategory[]
    article_status: Status
}