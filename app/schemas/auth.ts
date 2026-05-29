import z from "zod";

export const signUpSchema = z.object({
    name: z.string().min(2, "用户名至少 2 个字符").max(10, "用户名最多 10 个字符"),
    email: z.email("无效的邮箱地址"),
    password: z.string().min(8, "密码至少 8 个字符").max(30, "密码最多 30 个字符"),
});
export const loginSchema = z.object({
    email: z.email("无效的邮箱地址"),
    password: z.string().min(1, "密码不能为空").max(30, "密码最多 30 个字符"),
});