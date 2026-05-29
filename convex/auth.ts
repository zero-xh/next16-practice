import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { components } from "./_generated/api";
import { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { betterAuth } from "better-auth/minimal";
import authConfig from "./auth.config";
import { i18n } from "@better-auth/i18n";

const siteUrl = process.env.SITE_URL!;

// The component client has methods needed for integrating Convex with Better Auth,
// as well as helper methods for general use.
export const authComponent = createClient<DataModel>(components.betterAuth);

export const createAuth = (ctx: GenericCtx<DataModel>) => {
    return betterAuth({
        baseURL: siteUrl,
        database: authComponent.adapter(ctx),
        // Configure simple, non-verified email/password to get started
        emailAndPassword: {
            enabled: true,
            requireEmailVerification: false,
        },
        plugins: [
            // The Convex plugin is required for Convex compatibility
            convex({ authConfig }),
            i18n({
                translations: {
                    // 💡 定义中文（zh）或简写（zh-CN）的错误信息
                    zh: {
                        // 注册相关错误
                        USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "该邮箱已被注册，请更换邮箱",
                        EMAIL_NOT_VERIFIED: "邮箱未验证，请先激活您的账号",
                        PASSWORD_TOO_SHORT: "密码太短了，请输入至少 8 位数字或字母",
                        INVALID_EMAIL: "请输入正确的邮箱格式",

                        // 登录相关错误
                        INVALID_EMAIL_OR_PASSWORD: "邮箱或密码错误",
                        USER_NOT_FOUND: "找不到该用户，请确认是否已注册",

                        // 通用错误
                        INTERNAL_SERVER_ERROR: "服务器内部错误，请稍后再试",
                        FAILED_TO_PARSE_BODY: "请求参数格式不正确",
                    },
                },
                // 💡 配置语言检测策略（按顺序：Cookie -> 请求头 -> 会话）
                detection: ["cookie", "header", "session"],
            }),
        ],

    })
}

// Example function for getting the current user
// Feel free to edit, omit, etc.
export const getCurrentUser = query({
    args: {},
    handler: async (ctx) => {
        return authComponent.getAuthUser(ctx);
    },
});

