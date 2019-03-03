/**
 * 
 * @param {String} url 图片 url
 * @param {Boolean} noSuffix 图片是否有 `@3x`后缀
 * @param {Number} deep 层级深度
 */
function assetsImgUrl(url, noSuffix = false, deep = 1) {

    const prefixPath = new Array(deep).fill('..').join('/');

    if (noSuffix) {
        return `${prefixPath}/assets/images/${url}.png`;
    }
    return `${prefixPath}/assets/images/${url}@3x.png`;
}

export default {
    assetsImgUrl,
}