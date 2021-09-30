export interface options {
    width?: number;
    height?: number;
    type?: string;
    len?: number;
    lineShow?: boolean;
    pointShow?: boolean;
}
export declare class CanvasCaptcha {
    options: options;
    instance: HTMLCanvasElement;
    version: "1.0.0";
    private readonly baseChartArr;
    imageData: string;
    code: string;
    /**
     * 构造函数
     */
    constructor(options?: options);
    /**
     * 初始化canvas绘画
     * @private
     */
    private _init;
    /**
     * 生成验证码图片
     * @param canvas
     * @private
     */
    private createCode;
    /**
     * 刷新验证码
     */
    refresh(): string;
    /**
     * 验证验证码
     */
    validate(code: string): boolean;
    /**
     * 获取value
     */
    value(): string;
}
