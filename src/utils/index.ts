import * as dayjs from 'dayjs';

const Utils = {
  /**
   * 格式化时间
   * @param val
   * @param format
   */
  formatTime(val: string | number, format = 'YYYY-MM-DD HH:mm:ss') {
    return dayjs(val).format(format);
  },
};

export default Utils;
