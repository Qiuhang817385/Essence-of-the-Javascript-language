function move (obj, attr, target, speed, callback) {
  if (obj.timer) {
    clearInterval(obj.timer);
  }
  let current = parseInt(getComputedStyle(obj, null)[attr]);
  if (current > target) {
    speed = -speed;
  }
  obj.timer = setInterval(function () {
    let oldValue = parseInt(getComputedStyle(obj, null)[attr]);
    let newValue = oldValue + speed;
    if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
      newValue = target;
    }
    obj.style[attr] = newValue + 'px';
    if (newValue === target) {
      //达到目标，关闭定时器
      clearInterval(obj.timer);
      //动画执行完毕，调用回调函数
      callback && callback();
    }
  }, 15)

}

export default move;