/**
 *                             _ooOoo_
 *                            o8888888o
 *                            88" . "88
 *                            (| -_- |)
 *                            O\  =  /O
 *                         ____/`---'\____
 *                       .'  \\|     |//  `.
 *                      /  \\|||  :  |||//  \
 *                     /  _||||| -:- |||||-  \
 *                     |   | \\\  -  /// |   |
 *                     | \_|  ''\---/''  |   |
 *                     \  .-\__  `-`  ___/-. /
 *                   ___`. .'  /--.--\  `. . __
 *                ."" '<  `.___\_<|>_/___.'  >'"".
 *               | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *               \  \ `-.   \_ __\ /__ _/   .-` /  /
 *          ======`-.____`-.___\_____/___.-`____.-'======
 *                             `=---='
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *                     佛祖保佑        永无BUG
 *            佛曰:
 *                   写字楼里写字间，写字间里程序员；
 *                   程序人员写程序，又拿程序换酒钱。
 *                   酒醒只在网上坐，酒醉还来网下眠；
 *                   酒醉酒醒日复日，网上网下年复年。
 *                   但愿老死电脑间，不愿鞠躬老板前；
 *                   奔驰宝马贵者趣，公交自行程序员。
 *                   别人笑我忒疯癫，我笑自己命太贱；
 *                   不见满街漂亮妹，哪个归得程序员？
 */


// token

const TokenKey = 'token'

export function getToken(): string|null {
    return localStorage.getItem(TokenKey)
}

export function setToken(token: string):void {
    return localStorage.setItem(TokenKey, token)
}

export function removeToken():void {
    return localStorage.removeItem(TokenKey)
}

// name
const NameKey = 'name'

export function getName(): string|null {
    return localStorage.getItem(NameKey)
}

export function setName(name: string):void {
    return localStorage.setItem(NameKey, name)
}

export function removeName():void {
    return localStorage.removeItem(NameKey)
}

const superKey = 'superStatus'

export function getSuper() {
    return localStorage.getItem(superKey)
}

export function setSuper(is_super:any) {
    return localStorage.setItem(superKey, is_super)
}

export function removeSuper() {
    return localStorage.removeItem(superKey)
}

// 网页标题
export function getPageTitle(pageTitle?: any) {
    if (pageTitle) {
        return `${pageTitle} - 新`
    }
    return `新`
}

export const changeStatus=(status:any, type:string)=>{
    if(typeof status[type] === 'string'){
        status[type] = status[type] === '1' ? '0' : '1'
    }
    if(typeof status[type] === 'number'){
        status[type] = status[type] === 1 ? 0 : 1
    }
    if(typeof status[type] === 'boolean'){
        status[type] = status[type] !== true
    }
}
