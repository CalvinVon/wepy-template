const ConfigMap = {
    'development': {
        // 高德地图 key
        mapKey: '878143d74f7cd8be6434ce8dda5630ed',
    },
    'production': {
        // 高德地图 key
        mapKey: '878143d74f7cd8be6434ce8dda5630ed',
    }
}

const env = __NODE_ENV__;
const AppConfig = ConfigMap[env];

Object.defineProperty(AppConfig, '_APP_ENV', {
    value: env,
    writable: false,
    enumerable: false
})

export default AppConfig;
