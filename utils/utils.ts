/**
 * 生成随机数
 * @param min 最小值
 * @param max 最大值
 */
export function randomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 生成验证码
 * @param base
 * @param size
 */
export function createCode(base: Array<any>, size?: number): string {
    if (size === undefined) {
        size = 4;
    }
    let code: string = "";
    for (let i = 0; i < size; i++) {
        code += base[randomNum(0, base.length)];
    }
    return code;
}

/**
 * 生成code的基础数组
 * @param type
 */
export function getBaseArr(type?: string): Array<string> {
    const letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digital = "0123456789";
    if (type === "letter") {
        return letter.split("");
    } else if (type === "digital") {
        return digital.split("");
    } else {
        return (letter + digital).split("");
    }
}

/**
 * 生成随机颜色
 * @param min
 * @param max
 */
export function randomColor(min: number, max: number): string {
    const r = randomNum(min, max);
    const g = randomNum(min, max);
    const b = randomNum(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
}

/**
 * 合并对象
 * @param target
 * @param clone
 */
export function mergeObject(target: object, clone: object): object {
    // 使用断言指定类型，越过编译报错
    return (<any>Object).assign(target, clone);
}

/**
 * 选择类型
 * @param val
 */
export function typeOf(val: any): string {
    const type = Object.prototype.toString.call(val);
    return type.replace(/(^\[object )([a-zA-Z]+)(\]$)/, "$2").toLowerCase();
}
