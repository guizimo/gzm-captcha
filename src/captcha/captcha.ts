import { createCode, getBaseArr, randomColor, randomNum, typeOf } from "../../utils/utils";

// 验证码
export interface options {
    // 宽度
    width?: number;
    // 高度
    height?: number;
    // 类型
    type?: string;
    // 长度
    len?: number;
    // 是否有干扰线
    lineShow?: boolean;
    // 是否有干扰点
    pointShow?: boolean;
}

// 图形验证码对象
export class CanvasCaptcha {
    // 默认配置
    options: options = {
        width: 100,
        height: 30,
        len: 4,
        lineShow: true,
        pointShow: true,
    }
    // canvas实例对象
    instance: HTMLCanvasElement;
    // 版本号
    version: "1.0.0";
    // 字符数组
    private readonly baseChartArr: Array<string>;
    // 验证码图片
    imageData: string;
    // 验证码
    code: string;

    /**
     * 构造函数
     */
    constructor(options?: options) {
        // 处理入参
        if (options !== undefined) {
            if (typeOf(options) === "object") {
                // 判断传入参数类型
                (<any>Object).assign(this.options, options);
            } else {
                throw `[warn]: Invalid opts: type check failed for opts "type". Expected Object with value "${options}", got ${typeOf(
                    options
                )} with value ${options}.`;
            }
        }
        // 生成code类型的字符数组
        this.baseChartArr = getBaseArr(this.options.type);
        // 生成验证码
        this.code = createCode(this.baseChartArr, this.options.len);
        // 初始化canvas绘画
        this._init();
    }

    /**
     * 初始化canvas绘画
     * @private
     */
    private _init() {
        const canvas = document.createElement("canvas");
        canvas.width = this.options.width;
        canvas.height = this.options.height;
        this.instance = canvas;
        this.imageData = this.createCode(canvas);

    }

    /**
     * 生成验证码图片
     * @param canvas
     * @private
     */
    private createCode(canvas: HTMLCanvasElement) {
        if (canvas.getContext) {
            const ctx = canvas.getContext("2d");
            ctx.textBaseline = "middle";
            ctx.fillStyle = randomColor(180, 240);
            ctx.fillRect(0, 0, this.options.width, this.options.height);

            // 绘制随机数
            for (let i = 0; i < 4; i++) {
                const txt = this.code[i];
                ctx.font = "20px SimHei";
                ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
                ctx.shadowBlur = randomNum(-3, 3);
                ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                const x = (this.options.width / 5) * i;
                const y = this.options.height / 2;
                const deg = randomNum(-30, 30);
                // 设置旋转角度和坐标原点
                ctx.translate(x, y);
                ctx.rotate((deg * Math.PI) / 180);
                ctx.fillText(txt, 0, 0);
                // 恢复旋转角度和坐标原点
                ctx.rotate((-deg * Math.PI) / 180);
                ctx.translate(-x, -y);
            }

            // 绘制干扰线
            if (this.options.lineShow) {
                for (let j = 0; j < 4; j++) {
                    ctx.strokeStyle = randomColor(40, 180);
                    ctx.beginPath();
                    ctx.moveTo(
                        randomNum(0, this.options.width / 2),
                        randomNum(0, this.options.height / 2)
                    );
                    ctx.lineTo(
                        randomNum(0, this.options.width / 2),
                        randomNum(0, this.options.height)
                    );
                    ctx.stroke();
                }
            }

            // 绘制干扰点
            if (this.options.pointShow) {
                for (let x = 0; x < this.options.width / 4; x++) {
                    ctx.fillStyle = randomColor(0, 255);
                    ctx.beginPath();
                    ctx.arc(
                        randomNum(0, this.options.width),
                        randomNum(0, this.options.height),
                        1,
                        0,
                        2 * Math.PI
                    );
                    ctx.fill();
                }
            }
        } else {
            throw `[warn]: canvas.getContext is null`;
        }
        return canvas.toDataURL("image/png");
    }

    /**
     * 刷新验证码
     */
    refresh() {
        this.code = createCode(this.baseChartArr, this.options.len);
        return this.createCode(this.instance);
    }

    /**
     * 验证验证码
     */
    validate(code: string) {
        return code.toLowerCase() == this.code.toLowerCase();
    }

    /**
     * 获取value
     */
    value() {
        return this.imageData;
    }
}
