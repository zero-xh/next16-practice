import z from "zod";


export const postSchema = z.object({
    title: z.string().min(1, "标题不能为空").max(100, "标题最多 100 个字符"),
    content: z.string().min(1, "内容不能为空").max(1000, "内容最多 1000 个字符"),
    image: z.instanceof(File)
})