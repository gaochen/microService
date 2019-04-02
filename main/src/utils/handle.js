import config from '@/router/config'
import loadScript from 'load-script'

const handle = async function(to, from, next) {
  let path = to.path || ''
  let paths = path.split('/')
  let serviceName = paths[1]

  let cfg = config[serviceName]
  console.log(cfg)

  // 非业务线路由
  if (!cfg) {
    return false
  }

  // 该业务线已经加载
  if (cfg.loaded) {
    console.log('already')
    next()
    return true
  }

  for (var i = 0; i < cfg.src.length; i++) {
    await loadScript(cfg.src[i])
  }
  cfg.loaded = true
  next(to) // 继续请求页面
  return true
}

export default handle
