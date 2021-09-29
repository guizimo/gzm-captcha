import { CanvasCaptcha, options } from "./captcha/captcha";

export default function initCaptcha(options: options): any {
    return new CanvasCaptcha(options);
}
