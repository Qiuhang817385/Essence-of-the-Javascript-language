import React from 'react';
import './carouse.scss'
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.index = 1;
    this.container = React.createRef();
  }
  componentDidMount () {
    // 获取间隔时间，默认为 2000 ms。
    const delayTime = this.props.delayTime * 1000 || 2000;
    // 获取父容器
    let parent = this.container.current.parentNode;
    //获取父容器的宽度
    let width = this.props.width || parent.clientWidth;
    //获取父容器的高度。
    let height = this.props.height || parent.clientHeight;
    // 设置第一张图片和第三张图片的前后偏移。
    let imgs = this.container.current.children;
    imgs[0].style.transform = `translateZ(${height / 2}px)`;
    imgs[2].style.transform = `translateZ(-${height / 2}px) rotateX(180deg)`;
    // 设置轮播容器的尺寸
    this.container.current.style.width = width + 'px';
    this.container.current.style.height = height + 'px';
    // 开始轮播
    this.timer = setTimeout(this.loop.bind(this), delayTime);
    this.container.current.addEventListener('transitionend', () => {
      this.timer = setTimeout(this.loop.bind(this), delayTime);
    })
  }
  loop () {
    this.container.current.style.transform = 'rotateX(' + ((this.props.direction || 1) * this.index * 90) + 'deg)';
    this.container.current.style.transition = (this.props.transitionTime || 2) + 's';
    this.index++;
  }
  render () {
    console.log('this.props.imgList', this.props.imgList)
    return <div className='container' ref={this.container}>
      {this.props.imgList.map(item => {
        return <img className='img-item' alt='1' src={item} />
      })}
    </div>
  }
}
