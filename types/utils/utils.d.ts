/**
 * 生成随机数
 * @param min 最小值
 * @param max 最大值
 */
export declare function randomNum(min: number, max: number): number;
/**
 * 生成验证码
 * @param base
 * @param size
 */
export declare function createCode(base: Array<any>, size?: number): string;
/**
 * 生成code的基础数组
 * @param type
 */
export declare function getBaseArr(type?: string): Array<string>;
/**
 * 生成随机颜色
 * @param min
 * @param max
 */
export declare function randomColor(min: number, max: number): string;
/**
 * 合并对象
 * @param target
 * @param clone
 */
export declare function mergeObject(target: object, clone: object): object;
/**
 * 选择类型
 * @param val
 */
export declare function typeOf(val: any): string;
