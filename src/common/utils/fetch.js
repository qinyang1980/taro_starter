import Taro from '@tarojs/taro';

/**
 * @author andy.qin
 * @description Fetch类， 封装Taro.request
 */
class Fetch {
  constructor() {
    this._header = {};
    // 这里初始化headers对象
    // const headers = {};
    // headers[config.tokenName] = this._accessToken;
  }

  /**
   * GET类型的网络请求
   */
  async get(url) {
    try {
      const ret = await this._request(encodeURI(url), null, 'GET');
      return this._handleResponse(ret);
    } catch (err) {
      console.log('exception meet');
      return this._commonErrorHandle(err);
    }
  }

  /**
   * DELETE类型的网络请求
   */
  async del(url) {
    try {
      const ret = await this._request(encodeURI(url), null, 'DELETE');
      return this._handleResponse(ret);
    } catch (err) {
      return this._commonErrorHandle(err);
    }
  }

  /**
   * PUT类型的网络请求
   */
  async put(url, data) {
    try {
      const ret = await this._request(encodeURI(url), data, 'PUT');
      return this._handleResponse(ret);
    } catch (err) {
      return this._commonErrorHandle(err);
    }
  }

  /**
   * POST类型的网络请求
   */
  async post(url, data) {
    try {
      const ret = await this._request(encodeURI(url), data, 'POST');
      return this._handleResponse(ret);
    } catch (err) {
      return this._commonErrorHandle(err);
    }
  }

  /**
   * 通用网络请求
   * https://nervjs.github.io/taro/native-api.html#%E5%8F%91%E8%B5%B7%E8%AF%B7%E6%B1%82
   */
  _request(url, data, method) {
    // 显示加载动画
    this._showProgress();

    return Taro.request({
      url: url,
      data: data,
      method: method,
      dataType: 'json',
      header: this._header,
      complete: () => {
        // 请求结束后，隐藏加载动画
        this._hideProgress();
      }
    });
  }

  /**
   * 统一的结果处理函数
   */
  _handleResponse(ret) {
    // console.log(ret);

    // 需要重新取token
    // if (!ret.data.success) {
    //   if (config.tokenErrors.indexOf(ret.data.errno) > -1) {
    //     this._acquireNewToken();
    //   }
    //   return;
    // }

    // 非正常返回(404等)
    if (ret.statusCode !== 200) {
      return this._commonErrorHandle({ errMsg: '数据请求失败!' });
    }

    // 正确请求
    return ret.data;
  }

  /**
   * 统一的异常处理函数
   */
  _commonErrorHandle(err) {
    //console.log(err);

    // 已知会触发异常的情况:
    // 1. 服务器IP不在指定域名列表中
    // 2. 抓不到服务器地址
    if (err.errMsg) {
      this._showToast(err.errMsg);
    }

    return { success: false, message: err.errMsg };
  }

  _showProgress() {
    Taro.showNavigationBarLoading();
    //Taro.showLoading();
  }

  _hideProgress() {
    Taro.hideNavigationBarLoading();
    //Taro.hideLoading();
  }

  _showToast(msg) {
    Taro.showToast({ title: msg, icon: 'none' });
  }
}

const fetch = new Fetch();
export default fetch;
